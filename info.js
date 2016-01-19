/* Copyright (c) 2014-2015 Richard Rodger, MIT License */
/* jshint node:true, asi:true, eqnull:true */
'use strict';


const LRU = require('lru-cache');


module.exports = function info( options ){

    const seneca = this;

    options = seneca.util.deepextend({
        size: 99999,
        wait: 222
    },options);


    const info_cache = LRU( options.size );


    seneca.add( 'role:info,cmd:get', cmd_get );
    seneca.add( 'role:info,res:part', res_module );


    const cmd_get = function ( args, done ) {

        const senec  = this;
        const name = args.name;
        senec.act('role:info,req:part',{ name:name });

        setTimeout(function (){

            const data = info_cache.get(name) || {};
            done(null,data);

        },options.wait);
    };


    res_module = function (args, done) {

        const name = args.name;

        const data = info_cache.get( name ) || {};
        data[ args.part ] = args.data;
        info_cache.set( name, data );

        done();
    };

};
