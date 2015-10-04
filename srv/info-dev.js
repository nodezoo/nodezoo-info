require('seneca')()
  .use('../info.js')
  .repl(43001)
  .listen(44001)

  .use('redis-transport')
  .client({type:'redis',pin:'role:info,req:part'})
  .listen({type:'redis',pin:'role:info,res:part'})
