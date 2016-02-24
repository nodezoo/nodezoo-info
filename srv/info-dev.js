'use strict'

var opts = {
  metrics: {
    emitter: {
      enabled: true
    }
  },
  seneca_metrics: {
    group: 'nodezoo',
    tag: 'info',
    pins: [
      'role:info,req:part',
      'role:info,res:part'
    ]
  },
  mesh: {
    auto: true,
    pin: [
      'role:info,cmd:get',
      'role:info,res:*'
    ]
  }
}

require('seneca')()
  .use('../info.js')
  .use('vidi-metrics', opts.metrics)
  .use('vidi-seneca-metrics', opts.seneca_metrics)
  .use('mesh', opts.mesh)
