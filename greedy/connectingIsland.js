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

// function getCost(
//   costs,
//   fromP,
//   toP,
//   costsFound = { temp: 0, final: Number.MAX_SAFE_INTEGER }
// ) {
//   const costsFrom = costs.filter(([fromC]) => fromC === fromP)

//   for (let i = 0; i < costsFrom.length; i++) {
//     const [, toC, cost] = costsFrom[i]

//     costsFound.temp += cost

//     if (toC === toP) {
//       costsFound.final = Math.min(costsFound.final, costsFound.temp)
//     } else {
//       getCost(costs, toC, toP, costsFound)
//     }

//     costsFound.temp -= cost
//   }

//   return costsFound.final
// }

function getCheapestRoutes(
  costs,
  fromP,
  toP,
  costsFound = {
    sum: 0,
    final: Number.MAX_SAFE_INTEGER,
    usedRoutesAndCost: [],
    routesFinal: [],
  }
) {
  const costTos = costs.filter(
    ([fromC, toC]) => fromC === fromP || toC === fromP
  )
  // console.log('fromP:', fromP, 'toP:', toP, 'costTos:', costTos)

  for (let i = 0; i < costTos.length; i += 1) {
    const [fromC, toC, cost] = costTos[i]
    // console.log('fromC:', fromC, ' toC:', toC)

    const fromFinal = fromC === fromP ? fromC : toC
    const toFinal = toC === fromP ? fromC : toC
    // console.log('fromFinal:', fromFinal, ' toFinal:', toFinal)
    const curRoute = [fromFinal, toFinal].sort((a, b) => a - b)
    const used = costsFound.usedRoutesAndCost.some(
      ([from, to]) => from === curRoute[0] && to === curRoute[1]
    )
    // console.log('used', used, curRoute)
    if (used) continue

    costsFound.usedRoutesAndCost.push([...curRoute, cost])
    costsFound.sum += cost

    if (toFinal === toP) {
      if (costsFound.sum < costsFound.final) {
        costsFound.final = costsFound.sum
        costsFound.routesFinal = [...costsFound.usedRoutesAndCost]
      }
    } else {
      getCheapestRoutes(costs, toFinal, toP, costsFound)
    }

    const index = costsFound.usedRoutesAndCost.findIndex(
      ([from, to]) => from === curRoute[0] && to === curRoute[1]
    )
    costsFound.usedRoutesAndCost.splice(index, 1)

    costsFound.sum -= cost
  }

  return costsFound.routesFinal
}

function getCheapest(possibles, costs) {
  const routesUnique = []
  let sum = 0
  possibles.forEach(([fromP, toP]) => {
    const routes = getCheapestRoutes(costs, fromP, toP)
    // console.log('routes', routes)
    for (let i = 0; i < routes.length; i++) {
      const [from, to, cost] = routes[i]
      if (!routesUnique.some(([fromU, toU]) => fromU === from && toU === to)) {
        routesUnique.push(routes[i])
        sum += cost
      }
    }
  })

  // console.log(routesUnique)
  return sum
}

function solution(n, costs) {
  costs.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))

  const list = [...Array(n).keys()]
  const possibles = getAllPossibleRoutes(list)
  const price = getCheapest(possibles, costs)
  return price
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
    5,
    [
      [0, 1, 5],
      [1, 2, 3],
      [2, 3, 3],
      [3, 1, 2],
      [3, 0, 4],
      [2, 4, 6],
      [4, 0, 7],
    ],
    15
  )
  // runTest(
  //   solution,
  //   5,
  //   [
  //     [0, 1, 1],
  //     [3, 4, 1],
  //     [1, 2, 2],
  //     [2, 3, 4],
  //   ],
  //   8
  // )
  // runTest(
  //   solution,
  //   4,
  //   [
  //     [0, 1, 5],
  //     [1, 2, 3],
  //     [2, 3, 3],
  //     [1, 3, 2],
  //     [0, 3, 4],
  //   ],
  //   9
  // )
  // runTest(
  //   solution,
  //   5,
  //   [
  //     [0, 1, 1],
  //     [3, 1, 1],
  //     [0, 2, 2],
  //     [0, 3, 2],
  //     [0, 4, 100],
  //   ],
  //   104
  // )
  // runTest(
  //   solution,
  //   6,
  //   [
  //     [0, 1, 5],
  //     [0, 3, 2],
  //     [0, 4, 3],
  //     [1, 4, 1],
  //     [3, 4, 10],
  //     [1, 2, 2],
  //     [2, 5, 3],
  //     [4, 5, 4],
  //   ],
  //   11
  // )
  // runTest(
  //   solution,
  //   5,
  //   [
  //     [0, 1, 1],
  //     [2, 3, 1],
  //     [3, 4, 2],
  //     [1, 2, 2],
  //     [0, 4, 100],
  //   ],
  //   6
  // )
  // runTest(
  //   solution,
  //   5,
  //   [
  //     [0, 1, 1],
  //     [0, 4, 5],
  //     [2, 4, 1],
  //     [2, 3, 1],
  //     [3, 4, 1],
  //   ],
  //   8
  // )
  // runTest(
  //   solution,
  //   5,
  //   [
  //     [0, 1, 1],
  //     [0, 2, 2],
  //     [0, 3, 3],
  //     [0, 4, 4],
  //     [1, 3, 1],
  //   ],
  //   8
  // )

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

/*
테스트 1 〉	실패 (0.61ms, 30.4MB)
테스트 2 〉	통과 (0.70ms, 30.1MB)
테스트 3 〉	실패 (시간 초과)
테스트 4 〉	실패 (시간 초과)
테스트 5 〉	실패 (시간 초과)
테스트 6 〉	실패 (시간 초과)
테스트 7 〉	실패 (시간 초과)
테스트 8 〉	실패 (11.27ms, 35.5MB)
*/

// node -e "require('./greedy/connectingIsland.js').test()"
