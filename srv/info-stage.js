/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */

var PORT = process.env.PORT || 9000

var Seneca = require('seneca')

Seneca({tag: 'info', legacy: {meta: true}})
  //.test('print')

  .use('zipkin-tracer', {host: 'zipkin', sampling: 1})
  .use('statsd', {host: 'stats'})

  .listen(PORT)

  .use('redis-transport')
  .use('../info.js')

  .client({pin:'role:info,need:part', type:'redis', host:'redis', port:6379})
  .listen({pin:'role:info,collect:part', type:'redis', host:'redis', port:6379})
