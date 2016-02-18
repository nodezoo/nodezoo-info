var STATS = process.env.STATS || 'localhost'

var opts = {
  mesh: {
    auto: true,
    pin: ['role:info,cmd:get', 'role:info,res:*']
  }
}

require('seneca')()
  .use('../info.js')
  .use('mesh', opts.mesh)
  .listen(44001)
