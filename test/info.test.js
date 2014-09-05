/* Copyright (c) 2014 Richard Rodger */
"use strict";


// mocha npm.test.js


var seneca  = require('seneca')

var assert  = require('assert')


function make_errhandler(fin) {
  return function(err){ err && fin(err); return true; }
}


describe('npm', function() {

  var si = seneca({log:'silent'})
        .use('../info.js',{wait:3333})
        .use('../../nodezoo-github')
        .use('../../nodezoo-npm')
        .use('../info.js')

        .add('role:info,req:part',function(args,done){
          done()

          this.act(
            'role:npm,cmd:get',
            {name:args.name},
            function(err,mod){
              this.act('role:info,res:part,part:npm',
                       {name:args.name,data:mod.data$()})

              this.act(
                'role:github,cmd:get',
                {name:args.name,giturl:mod.giturl},
                function(err,mod){
                  this.act('role:info,res:part,part:github',
                           {name:args.name,data:mod.data$()})
                })
            })
        })


  it('get', function( fin ) {
    this.timeout(4444)
    si.options({errhandler:make_errhandler(fin)})

    si.act(
      'role:info,cmd:get',
      {name:'npm-version-verify-test'},
      function(err,out){
        console.log(out)
        fin()
      })
  })


})
