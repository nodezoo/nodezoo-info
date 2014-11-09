var seneca = require('seneca')()
  .use('redis-transport')
  .use('../info.js')

  .client({host: '192.168.59.103', type:'redis',pin:'role:info,req:part'})
  .listen({host: '192.168.59.103', type:'redis',pin:'role:info,res:part'})

  .listen();

