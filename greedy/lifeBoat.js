'use strict'
const { runTest } = require('../common/runTest')

// function getByTwoPointer(people, limit) {
//   people.sort((a, b) => a - b)

//   let count = 0

//   let lIdx = -1
//   let rIdx = people.length
//   let toRight = false
//   let sum = 0
//   while (rIdx - lIdx > 1) {
//     if (toRight) {
//       lIdx += 1
//       sum += people[lIdx]
//     } else {
//       rIdx -= 1
//       sum += people[rIdx]
//     }

//     if (sum === limit) {
//       count += 1
//       sum = 0
//     } else if (sum > limit) {
//       if (!toRight) {
//         sum -= people[rIdx]
//         rIdx += 1
//         toRight = true
//       } else {
//         count += 1
//         sum = 0
//         lIdx -= 1
//         toRight = false
//       }
//     }
//   }

//   return count + (sum > 0)
// }

function getByTwoPointer(people, limit) {
  people.sort((a, b) => a - b)

  let count = 0

  let lIdx = 0
  let rIdx = people.length - 1
  while (rIdx >= lIdx) {
    const sum = people[lIdx] + people[rIdx]
    if (rIdx !== lIdx && sum <= limit) {
      lIdx += 1
    }
    rIdx -= 1

    count += 1
  }

  return count
}

function solution(people, limit) {
  const count = getByTwoPointer(people, limit)
  return count
}

function test() {
  runTest(solution, [70, 50, 80, 50], 100, 3)
  runTest(solution, [70, 80, 50], 100, 3)

  runTest(solution, [70], 70, 1)
  runTest(solution, [40, 40], 80, 1)
  runTest(solution, [40, 41], 80, 2)
  runTest(solution, [40, 50, 50, 60], 100, 2)
  runTest(solution, [40, 40, 50, 60], 100, 2)
}

module.exports = {
  test,
}

/*
테스트 1 〉	실패 (4.47ms, 32.1MB)
테스트 2 〉	통과 (3.97ms, 33MB)
테스트 3 〉	실패 (1.50ms, 30.4MB)
테스트 4 〉	실패 (1.43ms, 30.3MB)
테스트 5 〉	실패 (0.85ms, 30.3MB)
테스트 6 〉	실패 (0.56ms, 30.3MB)
테스트 7 〉	실패 (0.80ms, 30MB)
테스트 8 〉	통과 (0.13ms, 30.2MB)
테스트 9 〉	실패 (0.32ms, 30.3MB)
테스트 10 〉	실패 (2.68ms, 30.5MB)
테스트 11 〉	실패 (2.18ms, 30.2MB)
테스트 12 〉	실패 (1.67ms, 30.3MB)
테스트 13 〉	실패 (1.42ms, 30.3MB)
테스트 14 〉	통과 (4.05ms, 33.1MB)
테스트 15 〉	통과 (0.25ms, 30.2MB)

정확성  테스트
테스트 1 〉	통과 (2.27ms, 32.1MB)
테스트 2 〉	통과 (1.11ms, 30.3MB)
테스트 3 〉	통과 (1.20ms, 30.5MB)
테스트 4 〉	통과 (1.08ms, 30.3MB)
테스트 5 〉	통과 (0.68ms, 30.3MB)
테스트 6 〉	통과 (0.41ms, 30.4MB)
테스트 7 〉	통과 (0.64ms, 30.3MB)
테스트 8 〉	통과 (0.11ms, 30.2MB)
테스트 9 〉	통과 (0.17ms, 30.4MB)
테스트 10 〉	통과 (1.07ms, 30.4MB)
테스트 11 〉	통과 (1.03ms, 30.4MB)
테스트 12 〉	통과 (0.86ms, 30.3MB)
테스트 13 〉	통과 (1.10ms, 30.3MB)
테스트 14 〉	통과 (1.26ms, 30.4MB)
테스트 15 〉	통과 (0.21ms, 30.4MB)
효율성  테스트
테스트 1 〉	통과 (14.84ms, 33.5MB)
테스트 2 〉	통과 (12.21ms, 33.5MB)
테스트 3 〉	통과 (14.69ms, 33.5MB)
테스트 4 〉	통과 (12.37ms, 33.6MB)
테스트 5 〉	통과 (11.70ms, 33.4MB)
*/

// node -e "require('./greedy/lifeBoat.js').test()"
