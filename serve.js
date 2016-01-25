'use strict'

// Get the host to connect to so we
// can emit metrics from our microservice.
var STATS = process.env.STATS || 'localhost'

// Options to configure our microservice.
var opts = {
  stats: {
    udp: {
      host: STATS // The host to emit our stats to.
    },
    pins:[
      'role:info,req:part', // Run stats for info requests.
      'role:info,res:part'  // Run stats for info part responses.
    ]
  },
  mesh: {
    auto: true, // auto assign ports for us
    pin: [
      'role:info,cmd:get', // mesh in requests
      'role:info,res:*' // mesh in responses
    ]
  }
}

// Seneca has a nice fluent api to initialise plugins,
// it will do the requiring for you too.
require('seneca')()
  .use('./info.js') // our business logic
  .use('mesh', opts.mesh) // mesh networking
  .use('msgstats', opts.stats) // stats emitter
