var STATS = process.env.STATS || 'localhost'

require('seneca')()
  .use('../info.js')
  .listen(44001)

  .use('mesh',{auto:true, pin:['role:info,cmd:get','role:info,res:*']})

  .use('msgstats',{
    udp: { host: STATS },
    pins:['role:info,req:part','role:info,res:part']
  })
