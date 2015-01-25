/* Copyright (c) 2014 Richard Rodger, MIT License */
/* jshint node:true, asi:true, eqnull:true */
'use strict';


var lru = require('lru-cache')



module.exports = function info(options) {
  var seneca = this

  options = seneca.util.deepextend({size: 99999, wait: 222}, options);

  var infoCache = lru(options.size);


  function cmdGet(args, done) {
    var seneca = this;

    var name = args.name
    seneca.act('role:info,req:part', {name:name})
    setTimeout(function(){
      var data = infoCache.get(name);
      done(null,data);
    },options.wait);
  }



  function reqModule(args, done) {
    done();
  }



  function resModule(args, done) {
    var name = args.name;
    
    var data = infoCache.get( name ) || {};
    data[ args.part ] = args.data;
    infoCache.set(name, data);
    done();
  }



  seneca.add('role:info,cmd:get', {name: { required$:true, string$:true }}, cmdGet);
  seneca.add('role:info,req:part', {name: { required$:true, string$:true }}, reqModule);
  seneca.add('role:info,res:part', {name: { required$:true, string$:true }}, resModule);
}

