'use strict';

require('seneca')()
  .use('redis-transport')
  .use('beanstalk-transport')
  .use('../info.js')
  .client({host: process.env.REDIS_IP, type:'redis',pin:'role:info,req:part'})
  .listen({host: process.env.REDIS_IP, type:'redis',pin:'role:info,res:part'})
  .listen({host: process.env.BEANSTALK_IP, port: 1130, type: 'beanstalk', pin: 'role:info,cmd:*'});

