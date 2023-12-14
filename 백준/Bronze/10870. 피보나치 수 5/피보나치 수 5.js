const rl = require("readline").createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const N = parseInt(inputs[0], 10);

  console.log(solution(N));
});

function solution(num) {
  if (num === 0) {
    return 0;
  }

  if (num === 1) {
    return 1;
  }

  return solution(num - 1) + solution(num - 2);
}