'use strict'
const { runTest } = require('../common/runTest')

function getCombination(
  list,
  count,
  start = 0,
  info = { items: [], result: 0 }
) {
  if (info.items.length >= count) {
    const item = parseInt(info.items.join(''))
    // console.log(item, info.result)
    if (item > info.result) {
      info.result = item
      // console.log(info.result)
    }

    return
  }

  for (let i = start; i < list.length; i++) {
    const cur = list[i]
    info.items.push(cur)

    getCombination(list, count, i + 1, info)

    info.items.pop()
  }

  return info.result
}

/*
--summary
Get largest and trim to exclude
--example
const list = [ 1, 9, 2, 4 ]
const result = []

getLargestAndTrim(list, 3, result)
// list: [ 2, 4 ]
// result: [ 9 ]

getLargestAndTrim(list, 2, result)
// list: []
// result: [ 9, 4 ]
*/
function getLargestAndTrim(list, to, result = []) {
  let max = 0
  let index = -1
  for (let i = 0; i < to; i++) {
    const item = list[i]
    if (item > max) {
      max = item
      index = i
    }
  }

  list = list.slice(index + 1)
  result.push(max)

  return list
}

function solution(number, k) {
  let list = number.split('').map((item) => parseInt(item))
  let count = list.length - k

  const result = []
  while (count >= 1) {
    list = getLargestAndTrim(list, list.length - count + 1, result)
    count -= 1
  }

  return result.join('')
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

테스트 1 〉	통과 (0.78ms, 30.3MB)
테스트 2 〉	실패 (시간 초과)
테스트 3 〉	실패 (시간 초과)
테스트 4 〉	실패 (시간 초과)
테스트 5 〉	실패 (시간 초과)
테스트 6 〉	실패 (시간 초과)
테스트 7 〉	실패 (런타임 에러)
테스트 8 〉	실패 (런타임 에러)
테스트 9 〉	실패 (런타임 에러)
테스트 10 〉	실패 (런타임 에러)
테스트 11 〉	통과 (0.28ms, 30.4MB)
테스트 12 〉	통과 (0.28ms, 30.3MB)

테스트 1 〉	통과 (0.37ms, 30.3MB)
테스트 2 〉	실패 (시간 초과)
테스트 3 〉	실패 (시간 초과)
테스트 4 〉	실패 (시간 초과)
테스트 5 〉	실패 (시간 초과)
테스트 6 〉	실패 (시간 초과)
테스트 7 〉	실패 (런타임 에러)
테스트 8 〉	실패 (런타임 에러)
테스트 9 〉	실패 (런타임 에러)
테스트 10 〉	실패 (런타임 에러)
테스트 11 〉	통과 (0.16ms, 30.3MB)
테스트 12 〉	통과 (0.31ms, 30.4MB)

테스트 1 〉	통과 (0.15ms, 30.4MB)
테스트 2 〉	통과 (0.12ms, 30MB)
테스트 3 〉	통과 (0.16ms, 30MB)
테스트 4 〉	통과 (0.88ms, 31.1MB)
테스트 5 〉	통과 (1.05ms, 30.9MB)
테스트 6 〉	통과 (29.23ms, 39MB)
테스트 7 〉	통과 (2752.94ms, 61.3MB)
테스트 8 〉	통과 (8174.01ms, 62.7MB)
테스트 9 〉	실패 (시간 초과)
테스트 10 〉	실패 (시간 초과)
테스트 11 〉	통과 (0.11ms, 30MB)
테스트 12 〉	통과 (0.09ms, 30.3MB)
*/

// node -e "require('./greedy/makeBiggestNumber.js').test()"
