'use strict'
const { runTest } = require('../common/runTest')

function getAllPossibleRoutes(list) {
  const ret = []
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      ret.push([list[i], list[j]])
    }
  }
  return ret
}

function getCost(
  costs,
  fromP,
  toP,
  costsFound = { temp: 0, final: Number.MAX_SAFE_INTEGER }
) {
  const costsFrom = costs.filter(([fromC]) => fromC === fromP)

  for (let i = 0; i < costsFrom.length; i++) {
    const [, toC, cost] = costsFrom[i]

    costsFound.temp += cost

    if (toC === toP) {
      costsFound.final = Math.min(costsFound.final, costsFound.temp)
    } else {
      getCost(costs, toC, toP, costsFound)
    }

    costsFound.temp -= cost
  }

  return costsFound.final
}

function getCheapest(possibles, costs) {
  possibles.forEach(([fromP, toP]) => {
    const cost = getCost(costs, fromP, toP)
    console.log(fromP, toP, cost)
  })
}

function solution(n, costs) {
  costs.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))

  const list = [...Array(n).keys()]
  const possibles = getAllPossibleRoutes(list)
  const price = getCheapest(possibles, costs)

  var answer = 0
  return answer
}

function test() {
  runTest(
    solution,
    4,
    [
      [0, 1, 1],
      [0, 2, 2],
      [1, 2, 5],
      [1, 3, 1],
      [2, 3, 8],
    ],
    4
  )

  // // Test sorting
  // runTest(
  //   solution,
  //   4,
  //   [
  //     [0, 2, 2],
  //     [0, 1, 1],
  //     [2, 3, 8],
  //     [1, 2, 5],
  //     [1, 3, 1],
  //   ],
  //   4
  // )
}

module.exports = {
  test,
}

// node -e "require('./greedy/connectingIsland.js').test()"
