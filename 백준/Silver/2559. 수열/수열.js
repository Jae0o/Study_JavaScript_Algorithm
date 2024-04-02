const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, K] = inputs[0].split(" ");
  const arr = inputs[1].split(" ").map(Number);

  solution(+N, +K, arr);
});

function solution(N, K, list) {
  let checkValue = 0;

  for (let i = 0; i < K; i++) {
    checkValue += list[i];
  }

  let maximumTemp = checkValue;

  for (let i = 0; i < N - K; i++) {
    checkValue -= list[i];
    checkValue += list[i + K];

    if (maximumTemp < checkValue) {
      maximumTemp = checkValue;
    }
  }

  console.log(maximumTemp);
}
