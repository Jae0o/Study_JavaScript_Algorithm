const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = inputs[0];
  const list = inputs[1].split(" ");

  solution(Number(N), list.map(Number));
});

function solution(N, list) {
  const sortedList = list.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < N; i++) {
    const target = sortedList[i];

    let front = 0;
    let back = N - 1;

    while (front < back) {
      if (front === i) {
        front++;
        continue;
      }

      if (back === i) {
        back--;
        continue;
      }

      const sumValue = sortedList[front] + sortedList[back];

      if (sumValue === target) {
        count++;
        break;
      }

      if (sumValue > target) {
        back--;
      }

      if (sumValue < target) {
        front++;
      }
    }
  }

  console.log(count);
}