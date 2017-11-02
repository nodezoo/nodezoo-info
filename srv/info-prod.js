/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */

//var BASES = process.env.BASES.split(',')
var CONSUL = process.env.CONSUL_SERVICE_HOST || 'localhost'

var Seneca = require('seneca')

Seneca({tag: 'info'})
  .test('print')

  .use('consul-registry', {
    host: CONSUL
  })

  .use('../info.js')

  .use('mesh', {
    listen: [
      {pin: 'role:info,cmd:get'},
      {pin: 'role:info,collect:part', model:'observe'}
    ],
    //bases: BASES,
    host: '@eth0',
    //sneeze: {silent:false}
    discover: {
      registry: {
        active: true
      }
    }
  })
