'use strict'
const { runTest } = require('../common/runTest')

function getCombination(list, count, start = 0, { items, result } = { items: [], result: [] }) {
  if (items.length >= count) {
    result.push([...items])
    return
  }

  for (let i = start; i < list.length; i++) {
    const cur = list[i];
    items.push(cur)
    
    getCombination(list, count, i + 1, { items, result })

    items.pop()
  }

  return result
}

function solution(number, k) {
  // const list = getCombination([1, 9, 2, 4], 2)
  // console.log(list)
  const list = getCombination(number, number.length - k)
  const result = list.reduce((prev, cur) => Math.max(prev, parseInt(cur.join(''))), 0)

  return result.toString()
}

function test() {
  runTest(solution, '1924', 2, '94')
  runTest(solution, '1231234', 3, '3234')
  runTest(solution, '4177252841', 4, '775841')
}

module.exports = {
  test,
}

/*
테스트 1 〉	통과 (0.79ms, 30.3MB)
테스트 2 〉	실패 (시간 초과)
테스트 3 〉	실패 (signal: aborted (core dumped))
테스트 4 〉	실패 (signal: aborted (core dumped))
테스트 5 〉	실패 (signal: aborted (core dumped))
테스트 6 〉	실패 (signal: aborted (core dumped))
테스트 7 〉	실패 (런타임 에러)
테스트 8 〉	실패 (런타임 에러)
테스트 9 〉	실패 (런타임 에러)
테스트 10 〉	실패 (런타임 에러)
테스트 11 〉	통과 (0.25ms, 30.3MB)
테스트 12 〉	통과 (0.33ms, 30.3MB)
*/

// node -e "require('./greedy/makeBiggestNumber.js').test()"
