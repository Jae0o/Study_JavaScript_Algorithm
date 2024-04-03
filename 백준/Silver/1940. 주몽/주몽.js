const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = inputs[0];
  const M = inputs[1];
  const list = inputs[2].split(" ");

  solution(Number(N), Number(M), list.map(Number));
});

function solution(N, M, list) {
  const sortedList = list.sort((a, b) => a - b);

  let front = 0;
  let back = N - 1;

  let count = 0;

  while (front < back) {
    const sumValue = sortedList[front] + sortedList[back];

    if (sumValue === M) {
      count++;
      front++;
      back--;
      continue;
    }

    if (sumValue < M) {
      front++;
      continue;
    }

    if (sumValue > M) {
      back--;
    }
  }

  console.log(count);
}