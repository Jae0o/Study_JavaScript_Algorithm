const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [Y, N] = inputs[0].split(" ").map(Number);
  const list = inputs[1].split(" ").map(Number);
  solution(N, list);
});

function solution(N, list) {
  let result = 0;

  for (let i = 0; i < N; i++) {
    let left = 0;
    let right = 0;

    for (let l = i; l >= 0; l--) {
      left = Math.max(list[l], left);
    }

    for (let r = i; r < N; r++) {
      right = Math.max(list[r], right);
    }

    const MinHeight = Math.min(left, right);
    result += MinHeight - list[i];
  }

  console.log(result);
}
