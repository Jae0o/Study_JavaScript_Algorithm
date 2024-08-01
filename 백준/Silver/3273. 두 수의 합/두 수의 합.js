const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = Number(inputs[0]);
  const list = inputs[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const X = Number(inputs[2]);

  solution(N, list, X);
});

function solution(N, list, X) {
  let front = 0;
  let back = N - 1;

  let result = 0;

  while (front < back) {
    const sumValue = list[front] + list[back];

    if (sumValue >= X) {
      if (sumValue === X) {
        result++;
      }

      back--;
      continue;
    }

    front++;
  }

  console.log(result);
}
