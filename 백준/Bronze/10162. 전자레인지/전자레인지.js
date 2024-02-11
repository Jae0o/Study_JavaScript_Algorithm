const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(parseInt(input, 10));
}).on("close", () => {
  const N = inputs.shift();

  solution(N);
});

const checkList = [300, 60, 10];

function solution(time) {
  let totalTime = time;

  let result = [];

  for (const button of checkList) {
    const A = Math.floor(totalTime / button);
    const B = totalTime % button;

    result.push(A);
    totalTime = B;
  }

  if (totalTime !== 0) {
    return console.log(-1);
  }

  return console.log(result.join(" "));
}
