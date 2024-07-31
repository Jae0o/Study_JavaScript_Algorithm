const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = Number(inputs.shift());

  solution(
    N,
    inputs.map(Number).sort((a, b) => a - b)
  );
});

function solution(N, list) {
  let result = 0;

  for (let front = 0; front < N; front++) {
    const current = list[front];
    let count = 1;

    for (let back = front + 1; back < front + 5; back++) {
      if (!list[back]) {
        break;
      }

      if (list[back] > current + 4) {
        break;
      }

      count++;
    }

    result = Math.max(result, count);
  }

  console.log(5 - result);
}
