const names = require('all-the-package-names')

// Most-depended-on names are first. See what's popular!
names.slice(0, 5)
/*
[
  'mocha',
  'chai',
  'lodash',
  'grunt',
  'eslint'
]
*/

names.includes('superagent')
// => true

names.includes('crazy-new-package-name')
// => false

names.length
// => 286289

names.filter(name => name.includes('banana'))
// => [ 'banana', 'banana-banana', 'banana-split', ...]
