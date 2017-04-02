/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */

var Lru = require('lru-cache')


module.exports = function info (options) {
  var seneca = this

  options = seneca.util.deepextend({
    size: 99999,
    wait: 222
  }, options)


  var info_cache = Lru(options.size)


  seneca.add( 'role:info,cmd:get', cmd_get )
  seneca.add( 'role:info,collect:part', collect_part )


  function cmd_get( msg, reply ) {
    var name = msg.name

    this.act('role:info,need:part', {name:name, default$:{}})

    setTimeout(function () {
      var data = info_cache.get(name) || {}
      reply(data)
    }, options.wait)
  }


  function collect_part( msg, reply ) {
    var name = msg.name
    
    var data = info_cache.get(name) || {}
    data[msg.part] = msg.data
    info_cache.set(name, data)

    // Asynchronous so no response needed.
    reply()
  }
  
}
