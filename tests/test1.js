const util = require('util')
const a = {
  a: {
    v: `1`,
    b: {
      g: {
        y: 3
      }
    }
  }
}
console.log(a)
console.log(util.inspect(a, {
  depth: null,
}))
