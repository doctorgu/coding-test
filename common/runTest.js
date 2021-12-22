'use strict'

function runTest(solution, ...args) {
  const resultShould = args.pop()
  console.log(...args, '->', resultShould)

  const result = solution.call(null, ...args)

  const wrong = `\u001b[31m Wrong: ${result} \u001b[0m`
  const remark = result !== resultShould ? wrong : 'OK'
  console.log(remark)
}

module.exports = {
  runTest,
}
