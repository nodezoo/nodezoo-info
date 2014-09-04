
var seneca = require('seneca')()
      .use('redis-transport')
      .use('../info.js')

      .client({type:'redis',pin:'role:info,req:part'})
      .listen({type:'redis',pin:'role:info,res:part'})

      .listen(9100)

