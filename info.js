'use strict'

var Cache = require('lru-cache')

var opts = {
  plugin: 'nodezoo-info',
  role: 'info',
  size: 99999,
  wait: 222
}

module.exports = function (options) {
  var seneca = this
  var extend = seneca.util.deepextend

  opts = extend(opts, options)
  opts.cache = Cache(options.size)

  seneca.add({role: opts.role, cmd: 'get'}, get)
  seneca.add({role: opts.role, res: 'part'}, update)

  return {
    name: opts.plugin
  }
}

function get (msg, done) {
  var seneca = this
  var name = msg.name

  seneca.act({role: opts.role, req: 'part', name: name})

  function respond () {
    done(null, (opts.cache.get(name) || {}))
  }

  setTimeout(respond, opts.wait)
}

function update (msg, done) {
  done()

  var name = msg.name
  var data = opts.cache.get(name) || {}


  data[msg.part] = msg.data
  data.name = name

  opts.cache.set(name, data)
  this.act('role:info,info:updated', {data: data})
}
