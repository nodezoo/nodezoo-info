"use strict"

// We cache our results inside an in mem lru cache,
// this does some pruning and other bits for us.
var Cache = require('lru-cache')

var defaults = {
  cache_size: 99999, // Size of our cache
  wait: 222 // How long to wait before responding with cache data
}

module.exports = function info (options) {
  var seneca = this
  var extend = seneca.util.deepextend

  // merge our defaults with user options.
  options = extend(defaults, options)

  // our in mem cache instance.
  var info_cache = Cache(options.size)

  // Handle requests for module information. We farm out individual
  // 'parts' of the request to other microservices. This means our
  // responses are eventually consistant over time.
  seneca.add({role: 'info', cmd: 'get'}, function (msg, done) {
    var seneca = this
    var name = msg.name

    // Call out to anyone who wants to contribute info.
    seneca.act({role: 'info', req: 'part', name: name})

    // Before returning, we give other services a chance to update
    // the cache, we'll run this function in the timeout below.
    function return_entry () {
      // Pull the latest entry from the cache
      var entry = info_cache.get(name) || {}

      // respond to the caller.
      done(null, entry)
    }

    // kick off our timeout.
    setTimeout(return_entry, options.wait)
  })

  // Handle responses to our requests for data. Each responder
  // provides us with a name we can use as a key. This handler
  // may be called multiple times, depending on who responds.
  seneca.add({role: 'info', res: 'part'}, function (msg, done) {
    var name = msg.name
    var part = msg.part

    // each entry in the cache is keyed by 'module' name
    var entry = info_cache.get(name) || {}

    // Each service responds with a 'part' of data, we store
    // this data based on the part name as the key.
    entry[part] = msg.data

    // Update the cache with our
    // newly updated entry
    info_cache.set(name, entry)

    // All done.
    done()
  })

}
