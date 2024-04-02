const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs = input;
}).on("close", () => {
  solution(+inputs);
});

function solution(N) {
  let sumValue = 1;

  let front = 1;
  let back = 1;

  let count = 0;

  while (front <= back) {
    if (sumValue === N) {
      count++;
    }

    if (sumValue < N) {
      back++;
      sumValue += back;
      continue;
    }

    if (sumValue >= N) {
      sumValue -= front;
      front++;
    }
  }

  console.log(count);
}
