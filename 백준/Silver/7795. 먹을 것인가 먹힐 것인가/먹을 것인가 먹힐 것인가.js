const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const testCase = [];

  inputs.reverse();
  const T = Number(inputs.pop());
  for (let i = 0; i < T; i++) {
    const [AN, BN] = inputs.pop().split(" ").map(Number);
    const A = inputs
      .pop()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    const B = inputs
      .pop()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);

    solution(AN, BN, A, B);
  }
});

function solution(AN, BN, A, B) {
  let count = 0;

  for (let front = 0; front < AN; front++) {
    const current = A[front];

    for (let back = 0; back < BN; back++) {
      if (current <= B[back]) {
        break;
      }

      count++;
    }
  }

  console.log(count);
}
