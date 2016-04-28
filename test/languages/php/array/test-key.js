// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var key = require('../../../../src/php/array/key.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/key.js (tested in test/languages/php/array/test-key.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'fruit1'
    var $array = {fruit1: 'apple', 'fruit2': 'orange'}
    var result = key($array)
    expect(result).to.deep.equal(expected)
    done()
  })
})