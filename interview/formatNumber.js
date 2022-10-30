'use strict';
const { runTest } = require('../common/runTest');

function formatNumber(number) {
  let numberStr = number.toString();
  while (numberStr.length % 3 !== 0) {
    numberStr = '0' + numberStr;
  }

  const result = [];
  for (let i = 0; i < numberStr.length; i += 3) {
    result.push(',');
    for (let j = i; j < i + 3; j += 1) {
      result.push(numberStr[j]);
    }
  }

  while (result[0] === '0' || result[0] === ',') {
    result.shift();
  }

  if (result.length === 0) return '0';
  else return result.join('');
}

function formatNumber2(number) {
  return number
    .toString()
    .split('')
    .reverse()
    .reduce((prev, cur, i) => [...prev, i % 3 === 0 ? ',' : '', cur], [])
    .filter((v, i) => i > 0 || (i === 0 && v !== ','))
    .reverse()
    .join('');
}

// https://stackoverflow.com/a/67207690/2958717
function formatNumber3(number) {
  let str = String(number);

  return str.split('').reduce((a, b, i) => a + (i && !((str.length - i) % 3) ? ',' : '') + b, '');
}

function formatNumber4(number) {
  let str = String(number);

  return str.split('').reduce((a, b, i) => a + (i && !((str.length - i) % 3) ? ',' : '') + b, '');
}

// https://stackoverflow.com/a/73883985/2958717
function formatNumber5(number) {
  if (number < 1000) {
    return String(number);
  }
  if (number < 1000000) {
    let numbers = String(number).split('');
    numbers.splice(-3, 0, ',');
    return numbers.join('');
  }
  if (number < 1000000000) {
    let numbers = String(number).split('');
    numbers.splice(-3, 0, ',');
    numbers.splice(-7, 0, ',');
    return numbers.join('');
  }
  if (number < 1000000000000) {
    let numbers = String(number).split('');
    numbers.splice(-3, 0, ',');
    numbers.splice(-7, 0, ',');
    numbers.splice(-11, 0, ',');
    return numbers.join('');
  }

  throw new Error(`number: ${number} is too big`);
}
function formatNumber6(number) {
  let commas = -1;
  for (let n3 = 3; n3 <= 12; n3 += 3) {
    commas++;
    const max = Math.pow(10, n3);
    if (number < max) {
      let numbers = String(number).split('');
      for (let i = 0; i < commas; i++) {
        numbers.splice(-(3 * (i + 1) + i), 0, ',');
      }
      return numbers.join('');
    }
  }

  throw new Error(`number: ${number} is too big`);
}

function test() {
  runTest(formatNumber, 123456, '123,456');
  runTest(formatNumber, 1234, '1,234');
  runTest(formatNumber, 123, '123');
  runTest(formatNumber, 12, '12');
  runTest(formatNumber, 1, '1');
  runTest(formatNumber, 0, '0');
}

module.exports = {
  test,
};

// node -e "require('./interview/formatNumber.js').test()"
