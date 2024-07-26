const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, M] = inputs[0].split(" ").map(Number);

  solution(N, M, inputs[1].split(" ").map(Number));
});

function solution(N, M, list) {
  let front = 0;
  let back = 0;

  let sum = list[front];

  let result = 0;

  while (back < N) {
    if (sum <= M) {
      if (sum === M) {
        result++;
      }

      back++;
      sum += list[back];
      continue;
    }

    if (sum > M) {
      sum -= list[front];
      front++;
    }
  }

  console.log(result);
}