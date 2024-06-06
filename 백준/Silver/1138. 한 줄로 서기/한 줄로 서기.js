const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = Number(inputs[0]);

  solution(N, inputs[1].split(" ").map(Number));
});

function solution(N, list) {
  const result = new Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    const leftMember = list[i];
    let count = 0;

    for (let k = 0; k < N; k++) {
      if (leftMember === count && result[k] === 0) {
        result[k] = i + 1;
        break;
      }

      if (result[k] === 0) {
        count++;
      }
    }
  }

  console.log(result.join(" "));
}
