/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */

var PORT = process.env.PORT || 9000

var Seneca = require('seneca')

Seneca({tag: 'info'})
  .listen(PORT)

  .use('../info.js')

  .add('role:info,need:part', function (msg, reply) {
    reply()

    this
      .act(msg,{part:'npm'})
      .act(msg,{part:'github'})
  })

  .client({pin:'role:info,need:part,part:npm', host:'npm', port:PORT})
  .client({pin:'role:info,need:part,part:github', host:'github', port:PORT})
