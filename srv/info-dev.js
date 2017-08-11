/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */

var MOCK_NPM = JSON.parse(process.env.MOCK_NPM || 'false')
var MOCK_GITHUB = JSON.parse(process.env.MOCK_GITHUB || 'false')
var MOCK = MOCK_NPM || MOCK_GITHUB


var Seneca = require('seneca')

Seneca({tag: 'info'})
  .test('print')

  .use('../info.js')

  .add('role:info,need:part', function (msg, reply) {
    reply()

    this
      .act(msg,{part:'npm'})
      .act(msg,{part:'github'})
  })

  .use('seneca-repl', {port:10030})

  .listen(9030)

  .client({pin:'role:info,need:part,part:npm', port:9040})
  .client({pin:'role:info,need:part,part:github', port:9050})


if (MOCK) {
  var mock = Seneca({tag:'mock'})
        .test('print')
        .client(9030)

  if (MOCK_NPM) {
    mock
      .listen(9040)
      .add('role:info,need:part,part:npm', function (msg, reply) {
        this.act('role:info,collect:part',{
          name: msg.name,
          part: 'npm',
          data: {name: msg.name, version:'1.0.0'}
        })

        reply()
      })
  }

  if (MOCK_GITHUB) {
    mock
      .listen(9050)
      .add('role:info,need:part,part:github', function (msg, reply) {
        this.act('role:info,collect:part',{
          name: msg.name,
          part: 'github',
          data: {name: msg.name, stars:2}
        })

        reply()
      })
  }
}
