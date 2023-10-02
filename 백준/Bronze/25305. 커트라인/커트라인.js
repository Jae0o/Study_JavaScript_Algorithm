const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let arr = input.map(item => item.split(' '))
arr = [parseInt(arr[0][1]), arr[1].map(item => parseInt(item)).sort((a, b) => b - a)]
console.log(arr[1][arr[0] - 1])