var REDIS = process.env.REDIS || 'localhost'
var STATS = process.env.STATS || 'localhost'

require('seneca')()
  .use('../info.js')
  .repl(43001)
  .listen(44001)

  .use('redis-transport')
  .client({ host:REDIS, type:'redis', pin:'role:info,req:part' })
  .listen({ host:REDIS, type:'redis', pin:'role:info,res:part' })

  .use('msgstats',{
    udp: { host: STATS },
    pins:['role:info,req:part','role:info,res:part']
  })
