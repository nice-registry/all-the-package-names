const { describe, it } = require('mocha')
const { expect } = require('chai')
const packageNames = require('.')

describe('names', () => {
  it('is an array', () => {
    expect(packageNames).to.be.an('array')
  })
})
