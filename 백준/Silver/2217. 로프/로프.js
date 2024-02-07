const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(parseInt(input, 10));
}).on("close", () => {
  const N = inputs.shift();
  solution(N, inputs);
});

function solution(N, ropes) {
  const sortedRopes = ropes.sort((a, b) => a - b);

  let result = 0;

  for (let i = 0; i < N; i++) {
    const value = ropes[i] * (N - i);

    result = Math.max(value, result);
  }

  console.log(result);
}
