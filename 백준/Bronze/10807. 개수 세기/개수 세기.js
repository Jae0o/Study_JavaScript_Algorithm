const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift()
const item = input[1]
const array = input[0].split(" ").filter((value) => value === item)
console.log(array.length)