require('seneca')()
  .repl(43001)
  .use('../info.js')
  .listen(44001)


  .add('role:info,req:part',function( args, done ){
    done()
    this.act('role:info,res:part',{
      name: args.name,
      part: 'npm',
      data: {
        name:'bar',
        version:'1.1.1'
      }
    })
  })
