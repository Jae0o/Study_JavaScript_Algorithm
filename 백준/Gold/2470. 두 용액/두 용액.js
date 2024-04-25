const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = +inputs[0];
  const list = inputs[1].split(" ").map(Number);

  solution(N, list);
});

function solution(N, list) {
  const sorted = list.sort((a, b) => a - b);

  let front = 0;
  let back = N - 1;

  let score = Infinity;
  let result = [0, 0];

  while (front < back) {
    const sum = sorted[front] + sorted[back];

    if (Math.abs(sum) < score) {
      result = [sorted[front], sorted[back]];

      score = Math.abs(sum);

      if (result === 0) break;
    }

    if (sum < 0) {
      front++;
      continue;
    }
    back--;
  }

  console.log(result.join(" "));
}
