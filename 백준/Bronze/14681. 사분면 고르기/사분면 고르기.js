
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function (){
  input = input.map((item) => +item);
  solution(input[0], input[1]);
  process.exit();
});

function solution(a, b) {
  if (a > 0 && b > 0) {
    console.log(1)
  } else if (a < 0 && b < 0) {
    console.log(3)
  } else if (a < 0) {
    console.log(2)
  } else {
    console.log(4)
  }
}