// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var array_sum = require('../../../../src/php/array/array_sum.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/array_sum.js (tested in test/languages/php/array/test-array_sum.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 195.6
    var result = array_sum([4, 9, 182.6])
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 67.2
    var $total = []
    var $index = 0.1
    for (var $y = 0; $y < 12; $y++){ $total[$y] = $y + $index }
    var result = array_sum($total)
    expect(result).to.deep.equal(expected)
    done()
  })
})