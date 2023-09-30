const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let a = [];
for (let i = 1; i < input.length; i += 1) {
  a.push(input[i].split(" ").map(item => +item))
}

solution(a);
function solution(a) {
  let count = 1
  for (const [x, y] of a) {
    console.log(`Case #${count}: ` + (x + y))
    count += 1
  }
}