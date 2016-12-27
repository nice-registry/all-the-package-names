const names = require('./')

// Most-depended-on names are first. See what's popular!
names.slice(0,5)
// [
//   'mocha',
//   'chai',
//   'lodash',
//   'grunt',
//   'eslint'
// ]

names.includes('superagent')
// => true

// Check if a given package name exists
names.includes('crazy-new-package-name')
// => false

names.length
// => 286289

names.filter(name => name.includes('banana'))
// => [ 'banana', 'banana-banana', 'banana-split', ...]

// Note: This example requires node 4 or greater because it uses
// const, arrow functions, and the `includes` array/string helper.
