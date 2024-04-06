const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, M] = inputs[0].split(" ");
  const list = inputs[1].split(" ");

  solution(Number(N), Number(M), list.map(Number));
});

function solution(N, M, list) {
  let front = 0;
  let back = M - 1;

  let sumValue = list.slice(front, M).reduce((t, a) => (t += a), 0);

  let maxValue = Number.MIN_SAFE_INTEGER;
  let count = 0;

  while (back < N) {
    if (maxValue === sumValue) {
      count++;
    }

    if (maxValue < sumValue) {
      maxValue = sumValue;
      count = 1;
    }

    back++;
    sumValue += list[back] - list[front];
    front++;
  }

  if (maxValue === 0) {
    return console.log("SAD");
  }

  console.log(maxValue);
  console.log(count);
}
