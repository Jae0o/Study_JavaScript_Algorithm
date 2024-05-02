const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = +inputs.shift();

  const reversed = inputs.reverse();

  for (let i = 0; i < N; i++) {
    const n = +reversed.pop();

    const list = [];

    for (let j = 0; j < n; j++) {
      const item = reversed.pop();

      list.push(item.split(" ").map(Number));
    }

    solution(n, list);
  }
});

function solution(N, list) {
  const sorted = list.sort((a, b) => a[0] - b[0]);

  let score = sorted[0][1];
  let count = 1;

  for (let i = 1; i < N; i++) {
    const current = sorted[i][1];

    if (score > current) {
      score = current;
      count++;
    }
  }

  console.log(count);
}