const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let a = +input[0]
let b = +input[1]
let c = [];
for (let i = 2; i < input.length; i += 1) {
  c.push(input[i].split(" ").map(item => +item))
}

solution(a, c);
function solution(a, c) {

  let count = 0;
  for (let i = 0; i < c.length; i += 1) {
    count += c[i][0] * c[i][1]
  }

  console.log(count === a ? "Yes" : "No")
}