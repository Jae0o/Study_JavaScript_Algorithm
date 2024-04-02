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
  let maximumTemp = -999;

  for (let i = 0; i <= N - K; i++) {
    let sumTemp = 0;

    for (let j = 0; j < K; j++) {
      sumTemp += list[i + j];
    }

    if (maximumTemp < sumTemp) {
      maximumTemp = sumTemp;
    }
  }

  console.log(maximumTemp);
}
