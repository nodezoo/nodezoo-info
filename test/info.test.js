/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */

var Code = require('code')
var Lab = require('lab')
var Seneca = require('seneca')

var lab = exports.lab = Lab.script()
var describe = lab.describe
var it = lab.it
var expect = Code.expect


describe('info', function () {

  it('happy', function (done) {
    Seneca()

    // Place Seneca into test mode. Errors will be passed to done callback,
    // so no need to handle them in callbacks.
      .test(done)

    // Uncomment if you want to see detailed logs
    // .test(done, 'print')

    // Load the info plugin
      .use('..')

    // Define mock messages.
      .add('role:info,need:part', function (msg, reply) {
        this
          .act('role:info,collect:part',{
            name: msg.name,
            part: 'npm',
            data: {name: msg.name, version:'1.0.0'}
          })
          .act('role:info,collect:part',{
            name: msg.name,
            part: 'github',
            data: {name: msg.name, stars:2}
          })
      })

      .act('role:info,cmd:get,name:foo', function (ignore, out) {
        expect(out.npm).to.equal({ name: 'foo', version: '1.0.0' })
        expect(out.github).to.equal({ name: 'foo', stars: 2 })

        done()
      })
  })
})


