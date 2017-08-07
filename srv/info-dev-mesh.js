/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */


var Seneca = require('seneca')

Seneca({tag: 'info'})
  //.test()
  .test('print')
  .use('monitor')


  .use('mesh', {
    listen: [
      {pin:'role:info,cmd:get', model:'consume'},
      {pin:'role:info,collect:part', model:'observe'},
    ]
  })

  .use('../info.js')

  .use('seneca-repl', {port:10030})
