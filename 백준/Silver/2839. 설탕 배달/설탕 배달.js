const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = inputs.shift();
  solution(parseInt(N, 10));
});

const checkList = [5, 3];

function solution(N) {
  let value = N;
  let count = 0;

  while (value > 0) {
    if (value % 5 === 0) {
      value -= 5;
    } else {
      value -= 3;
    }

    count++;
  }

  if (value === 0) {
    console.log(count);
    return;
  }

  console.log(-1);
}
