'use strict'

var opts = {
  metrics: {
    emitter: {
      enabled: false
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
    listen: [
      {pin: 'role:info,cmd:get', model: 'consume'},
      {pin: 'role:info,res:part', model: 'observe'}
    ]
  }
}

require('seneca')()
  .use('entity')
  .use('../info.js')
  .use('vidi-metrics', opts.metrics)
  .use('vidi-seneca-metrics', opts.seneca_metrics)
  .use('mesh', opts.mesh)
