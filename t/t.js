'use strict'
const { runTest } = require('../common/runTest')

function fillVals(rows) {
  function pushSafe(vals, cl1, cl2, cols) {
    if (cl1 >= 0 && cl1 < cols.length) {
      vals.push(cols[cl1].val)
    }
    if (cl2 >= 0 && cl2 < cols.length) {
      vals.push(cols[cl2].val)
    }
  }

  function getVals(type, rows, rowIndex, colIndex) {
    const vals = []
    const { mid, cols } = rows[rowIndex]

    switch (type) {
      case 'self':
        vals.push(cols[colIndex].val)
        break
      case 'left':
        for (let cl = 0; cl < colIndex; cl += 1) {
          vals.push(cols[cl].val)
        }
        break
      case 'right':
        for (let cl = colIndex + 1; cl < cols.length; cl += 1) {
          vals.push(cols[cl].val)
        }
        break
      case 'downleft':
        {
          let { normal, distance } = cols[colIndex]
          let cl = normal ? colIndex : colIndex - distance
          for (let rw = rowIndex + 1; rw < rows.length; rw += 1) {
            const colsCur = rows[rw]
            pushSafe(vals, cl - 1, cl, colsCur)
            cl -= 1
          }
        }
        break
      case 'downright':
        {
          let { normal, distance } = cols[colIndex]
          let cl = normal ? colIndex : colIndex + distance
          for (let rw = rowIndex + 1; rw < rows.length; rw += 1) {
            const colsCur = rows[rw]
            pushSafe(vals, cl, cl + 1, colsCur)
            cl += 1
          }
        }
        break
      case 'upleft':
        {
          let { normal, distance } = cols[colIndex]
          distance += normal ? 1 : 0
          for (let rw = rowIndex - 1; rw >= 0; rw -= 1) {
            const { mid, cols: colsCur } = rows[rw]
            const cl = mid - distance
            pushSafe(vals, cl - 1, cl, colsCur)
            distance += 1
          }
        }
        break
      case 'upright':
        {
          let { normal, distance } = cols[colIndex]
          let cl = !normal ? colIndex : colIndex + distance
          for (let rw = rowIndex - 1; rw >= 0; rw -= 1) {
            const colsCur = rows[rw]
            pushSafe(vals, cl, cl + 1, colsCur)
            cl += 1
          }
        }
        break
    }

    return vals
  }

  for (let rw = 0; rw < rows.length; rw += 1) {
    const { cols } = rows[rw]
    for (let cl = 0; cl < cols.length; cl += 1) {
      // console.log(rows, rw, cl)
      const valsUpLeft = getVals('upleft', rows, rw, cl)
      console.log(rw, cl, '---', valsUpLeft)
      // const valsUpRight = getVals('upright', rows, rw, cl)
      // const valsSelf = getVals('self', rows, rw, cl)
      // const valsDownLeft = getVals('downleft', rows, rw, cl)
      // const valsDownRight = getVals('downright', rows, rw, cl)
      // const vals = [...valsUpLeft, ...valsUpRight, ...valsSelf, ...valsDownLeft, ...valsDownRight]
      //             .sort((a, b) => a - b)
      // cols[cl].vals = vals
    }
  }
}

function getMatrix(n) {
  const rows = []

  let val = -1
  let colCount = 1
  for (let rw = 0; rw < n; rw += 1) {
    const cols = []
    const mid = Math.floor(colCount / 2)
    for (let cl = 0; cl < colCount; cl += 1) {
      val += 1

      let normal = false
      if (rw % 2 === 0) {
        normal = val % 2 === 0
      } else {
        normal = val % 2 === 1
      }

      const distance = Math.abs(cl - mid)

      cols.push({ val, normal, distance })
    }
    rows.push({ mid, cols })

    colCount += 2
  }

  return rows
}

function solution(n, rooks) {
  const m = getMatrix(n)
  const matrix = fillVals(m)

  console.log(matrix)
  var answer = -1
  return answer
}

function test() {
  runTest(solution, 3, 2, 6)
  // runTest(solution, 5, 3, 76)
}

module.exports = {
  test,
}

// node -e "require('./t/t.js').test()"
