'use strict'

var Code = require('code')
var Lab = require('lab')
var Seneca = require('seneca')
var _ = require('lodash')

var lab = exports.lab = Lab.script()
var describe = lab.describe
var it = lab.it
var suite = lab.suite
var before = lab.before
var expect = Code.expect

var realModule =
{data: {
  'name': 'lodash',
  'url': 'https:\/\/travis-ci.org\/lodash\/lodash',
  'id': 48500,
  'group': 'stable',
  'active': true,
  'build_state': 'passed',
  'last_built': '2016-04-06T06:50:17Z',
  'id$': 'lodash'
}}

var si = Seneca()
si.use('../info')

suite('nodezoo-info suite tests ', function () {
  before({}, function (done) {
    si.ready(function (err) {
      if (err) {
        return process.exit(!console.error(err))
      }
      si.add({role: 'info', info: 'updated'}, function (args, done) {
        done()
      })
      si.add({role: 'info', req: 'part'}, function (args, done) {
        done()
      })
      si.act({role: 'info', res: 'part', part: 'travis', name: 'lodash'}, realModule)

      done()
    })
  })
})

describe('nodezoo-info tests', () => {
  it('can Find Module', function (done) {
    si.act(_.extend({role: 'info', cmd: 'get', name: 'lodash'}), function (err, data) {
      expect(err).to.not.exist()
      expect(data).to.not.be.empty()
      done(err)
    })
  })
  it('cannot Find Module', function (done) {
    si.act(_.extend({role: 'info', cmd: 'get', name: 'fakeModuleName'}), function (err, data) {
      expect(err).to.not.exist()
      expect(data).to.be.empty()
      done(err)
    })
  })
})
