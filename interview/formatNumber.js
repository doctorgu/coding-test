'use strict'
const { runTest } = require('../common/runTest')

function solution(number) {
  let numberStr = number.toString()
  while (numberStr.length % 3 !== 0) {
    numberStr = '0' + numberStr
  }

  const result = []
  for (let i = 0; i < numberStr.length; i += 3) {
    result.push(',')
    for (let j = i; j < i + 3; j += 1) {
      result.push(numberStr[j])
    }
  }

  while (result[0] === '0' || result[0] === ',') {
    result.shift()
  }

  if (result.length === 0) return '0'
  else return result.join('')
}

function test() {
  runTest(solution, 123456, '123,456')
  runTest(solution, 1234, '1,234')
  runTest(solution, 123, '123')
  runTest(solution, 12, '12')
  runTest(solution, 1, '1')
  runTest(solution, 0, '0')
}

module.exports = {
  test,
}

// node -e "require('./interview/formatNumber.js').test()"
