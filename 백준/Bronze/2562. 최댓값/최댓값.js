const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const maxValue = Math.max(...input)
console.log(maxValue)
console.log(input.indexOf(maxValue.toString()) + 1,)