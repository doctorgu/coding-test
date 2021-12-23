'use strict'
const { runTest } = require('../common/runTest')

function solution(n, costs) {
  costs.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
  console.log(costs)

  var answer = 0
  return answer
}

function test() {
  // runTest(
  //   solution,
  //   4,
  //   [
  //     [0, 1, 1],
  //     [0, 2, 2],
  //     [1, 2, 5],
  //     [1, 3, 1],
  //     [2, 3, 8],
  //   ],
  //   4
  // )
  runTest(
    solution,
    4,
    [
      [0, 2, 2],
      [0, 1, 1],
      [2, 3, 8],
      [1, 2, 5],
      [1, 3, 1],
    ],
    4
  )
}

module.exports = {
  test,
}

// node -e "require('./greedy/connectingIsland.js').test()"
