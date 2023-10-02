const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let arr = input.map(item => parseInt(item)).sort((a, b) => a - b)
solution(arr);
function solution(a) {
  const sum = a.reduce((a, b) => a += b, 0)
  console.log(sum / (a.length))
  console.log(a[Math.floor(a.length / 2)])
}