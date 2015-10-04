var REDIS = process.env.REDIS || 'localhost'

require('seneca')()
  .use('../info.js')
  .repl(43001)
  .listen(44001)

  .use('redis-transport')
  .client({ host:REDIS, type:'redis', pin:'role:info,req:part' })
  .listen({ host:REDIS, type:'redis', pin:'role:info,res:part' })
