/* globals describe, it */

const names = require('..')
const assert = require('assert')

describe('all-the-package-names', function(){
  it ('is an array', function() {
    assert(Array.isArray(names))
  })

  it ('has hecka names', function() {
    assert(names.length > 190000)
  })
})
