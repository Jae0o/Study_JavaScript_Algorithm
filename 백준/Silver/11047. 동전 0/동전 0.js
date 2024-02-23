const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, money] = inputs.shift().split(" ");
  const checkList = inputs.reverse();

  solution(parseInt(money, 10), checkList);
});

function solution(N, checkList) {
  let total = N;
  let count = 0;

  for (const check of checkList) {
    count += Math.floor(total / check);
    total = total % check;
  }

  console.log(count);
}
