const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ').map((item) => +item);
solution(input[0], input[1]);
function solution(a, b) {

  if (b - 45 < 0) {
    if (a - 1 < 0) {
      console.log(24 + (a - 1), 60 + (b - 45))
    } else {
      console.log(a - 1, 60 + (b - 45))
    }
  } else {
    console.log(a, b - 45)
  }
}