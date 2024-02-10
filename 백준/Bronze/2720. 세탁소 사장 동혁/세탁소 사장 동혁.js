const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(parseInt(input, 10));
}).on("close", () => {
  const N = inputs.shift();

  for (const money of inputs) {
    solution(money);
  }
});

const checkList = [25, 10, 5, 1];

function solution(money) {
  const result = [];
  let count = money;

  for (const check of checkList) {
    const A = Math.floor(count / check);
    const B = count % check;

    result.push(A);
    count = B;
  }

  console.log(result.join(" "));
}
