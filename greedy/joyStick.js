'use strict'

const { runTest } = require('../common/runTest')

function getLargestABlock(nums) {
  const strings = nums.join('')
  const ms = strings.matchAll(/0+/g)
  if (!ms) {
    return { index: -1 }
  }

  let length = 0
  let index = -1
  for (let m of ms) {
    const lenCur = m[0].length
    if (lenCur > length) {
      length = lenCur
      index = m.index
    }
  }

  return { index, length }
}

function getFirstLastNoneA(nums) {
  let first = -1,
    last = -1

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num !== 0) {
      first = i
      break
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i]
    if (num !== 0) {
      last = i
      break
    }
  }

  return { first, last }
}

function getFromTo(nums) {
  const { index, length } = getLargestABlock(nums)
  // No need to move
  if (length === nums.length) {
    return { count: 0 }
  }

  const leftCount = index
  const rightCount = nums.length - (index + length)
  const countLFirst = leftCount * 2 + rightCount
  const countRFirst = leftCount + rightCount * 2
  if (
    leftCount > 0 &&
    rightCount > 0 &&
    (length > countLFirst || length > countRFirst)
  ) {
    // A block is larger than (left * 2) + right or left + (right * 2)
    // So not cross block by returning
    const info = {
      from: 0,
      to: index - 1,
      from2: index + length,
      to2: nums.length - 1,
    }
    if (countLFirst <= countRFirst) {
      return { count: countLFirst, ...info }
    } else {
      return { count: countRFirst, ...info }
    }
  } else {
    // To shorter direction
    const { first, last } = getFirstLastNoneA(nums)
    const countToR = last + 1
    const countToL = nums.length - first
    const info =
      countToR <= countToL
        ? { count: countToR, from: 0, to: last }
        : { count: countToL, from: last, to: nums.length - 1 }
    // console.log(nums, first, last, countToR, countToL, info)
    return info
  }
}

function solution(name) {
  const nums = name.split('').map((c) => {
    // 0 ~ 25
    const n = c.charCodeAt(0) - 65
    if (n <= 13) return n
    else return 26 - n
  })
  if (nums.length === 1) {
    return nums[0]
  }

  let total = 0

  const numFirst = nums.shift()
  total += numFirst
  console.log(1, total)

  const { count, from, to, from2, to2 } = getFromTo(nums)
  total += count
  console.log(2, total)

  if (from !== undefined) {
    for (let i = from; i <= to; i++) {
      total += nums[i]
    }
  }
  console.log(3, total)

  if (from2 !== undefined) {
    for (let i = from2; i <= to2; i++) {
      total += nums[i]
    }
  }
  console.log(4, total)

  console.log(total)
  return total
}

function test() {
  // 1 only
  runTest(solution, 'A', 0)
  runTest(solution, 'B', 1)
  runTest(solution, 'Z', 1)
  // No need to move
  runTest(solution, 'AA', 0)
  runTest(solution, 'AAA', 0)
  // UpDown Direction
  runTest(solution, 'N', 13)
  runTest(solution, 'O', 12)
  // LeftRight Direction (First char has no effect)
  runTest(solution, 'ABA', 2)
  runTest(solution, 'ABAA', 2)
  runTest(solution, 'AB', 2)
  runTest(solution, 'AAB', 2)
  runTest(solution, 'ABABA', 5)
  runTest(solution, 'ABAABABA', 9)
  runTest(solution, 'AAABA', 3)
  runTest(solution, 'AABAA', 3)
  // First to right then to left
  runTest(solution, 'ABAAAAAAAAABB', 7)
  // First to left then to right
  runTest(solution, 'ABBAAAAAAAAAB', 7)
  // ETC
  runTest(solution, 'BAAABBBBBBB', 15)
}

module.exports = {
  test,
}

// node -e "require('./greedy/joyStick.js').test()"
