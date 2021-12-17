'use strict'
const { runTest } = require('../common/runTest')

function getCombination(list, count) {
  const res = []

  if (count === 2) {
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length; j++) {
        let cur = `${list[i]}${list[j]}`
        res.push(cur)
      }
    }
  } else if (count === 3) {
  }

  return res
}

function solution(number, k) {
  const list = getCombination([1, 2, 3], 1)
  // const list = getCombination([1, 9, 2, 4], 2)
  console.log(list)

  return '94'
}

function test() {
  runTest(solution, '1924', 2, '94')
  // runTest(solution, '1231234', 3, '3234')
  // runTest(solution, '4177252841', 4, '775841')
}

module.exports = {
  test,
}

// node -e "require('./greedy/makeBiggestNumber.js').test()"
