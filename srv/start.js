'use strict'

var envs = process.env

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
    host: envs.INFO_HOST || '127.0.0.1',
    bases: [envs.BASE_HOST || '127.0.0.1:39999'],
    listen: [
      {pin: 'role:info,cmd:get', model: 'consume', host: envs.INFO_HOST || '127.0.0.1'},
      {pin: 'role:info,res:part', model: 'observe', host: envs.INFO_HOST || '127.0.0.1'}
    ]
  }
}

require('seneca')()
  .use('entity')
  .use('../info.js')
  .use('vidi-metrics', opts.metrics)
  .use('vidi-seneca-metrics', opts.seneca_metrics)
  .use('mesh', opts.mesh)
