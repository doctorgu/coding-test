'use strict'
const { runTest } = require('../common/runTest')

function addCount(people, limit, info = { sum: 0, count: 0 }) {
  if (people.length === 0) return

  const firstIdx = people.findIndex((p) => p === limit)
  if (firstIdx) {
    people.splice(firstIdx, 1)
    info.sum = 0
    info.count += 1

    addCount(people, limit, info)
    return
  }

  people.sort((a, b) => b - a)
}

function solution(people, limit) {
  var answer = 0
  return answer
}

function test() {
  runTest(solution, [70, 50, 80, 50], 100, 3)
  runTest(solution, [70, 80, 50], 100, 3)

  runTest(solution, [40, 40, 50, 60], 100, 2)
}

module.exports = {
  test,
}

// node -e "require('./greedy/lifeBoat.js').test()"
