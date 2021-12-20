'use strict'
const { runTest } = require('../common/runTest')

function getCombination(list, count, start = 0, info = { items: [], result: 0 }) {
  if (info.items.length >= count) {
    const item = parseInt(info.items.join(''))
    // console.log(item, info.result)
    if (item > info.result){
      info.result = item
      // console.log(info.result)
    }

    return
  }

  for (let i = start; i < list.length; i++) {
    const cur = list[i];
    info.items.push(cur)
    
    getCombination(list, count, i + 1, info)

    info.items.pop()
  }

  return info.result
}

/*
3124 -> 3124
1324 -> 324
1234 -> 34
*/
function trimSmall(list, count) {
  const list2 = list.slice(0, list.length - count + 1)
  const { value, index } = list2.reduce((prev, cur, index) => 
  cur > prev.value
  ? { value: cur, index} 
  : prev, { value: 0, index: 0 })
  return list.slice(index)
}

function solution(number, k) {
  const list = number.split('').map(item => parseInt(item))
  const count = list.length - k
  const list2 = trimSmall(list, count)
  const result = getCombination(list2, count)
  
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
*/

// node -e "require('./greedy/makeBiggestNumber.js').test()"
