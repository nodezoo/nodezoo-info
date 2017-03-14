/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */

var MOCK_NEED = JSON.parse(process.env.MOCK_NEED || 'false')


var Seneca = require('seneca')

Seneca({tag: 'info'})
  .use('../info.js')

  .listen(9030)

