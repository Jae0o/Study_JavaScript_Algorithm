const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const prices = inputs[0].split(" ").map(Number);
  const A = inputs[1].split(" ").map(Number);
  const B = inputs[2].split(" ").map(Number);
  const C = inputs[3].split(" ").map(Number);
  solution(prices, A, B, C);
});

function solution(prices, A, B, C) {
  const minTime = Math.min(...A, ...B, ...C);
  const maxTime = Math.max(...A, ...B, ...C);

  const chart = new Array(maxTime + 1).fill(0);
  const list = [A, B, C];

  for (const [inTime, outTime] of list) {
    for (let i = inTime; i < outTime; i++) {
      chart[i]++;
    }
  }

  let result = 0;

  for (let i = minTime; i <= maxTime; i++) {
    if (chart[i] - 1 < 0) {
      continue;
    }

    result += prices[chart[i] - 1] * chart[i];
  }

  console.log(result);
}
