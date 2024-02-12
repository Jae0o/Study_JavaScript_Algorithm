const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(parseInt(input, 10));
}).on("close", () => {
  const N = inputs.shift();

  solution(1000 - N);
});

const checkList = [500, 100, 50, 10, 5, 1];

function solution(money) {
  let count = 0;

  let currentMoney = money;

  for (const checkItem of checkList) {
    count += Math.floor(currentMoney / checkItem);
    currentMoney = currentMoney % checkItem;
  }

  console.log(count);
}
