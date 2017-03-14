var Seneca = require('seneca')

Seneca({tag: 'info'})
  .use('../info.js')

  .listen(9030)

