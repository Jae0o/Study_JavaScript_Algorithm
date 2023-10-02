const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[1].split(" ").map(item => +item)
const obj = {};
const sorted = [...new Set(input)]
  .sort((a, b) => a - b)
  .forEach((item, idx) => obj[item] = idx)
input = input.map(item => obj[item]).join(" ")
console.log(input)
