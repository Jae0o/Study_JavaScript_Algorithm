const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, K] = inputs[0].split(" ").map(Number);
  const list = inputs[1].split(" ").map(Number);

  solution(N, K, list);
});

function solution(N, K, list) {
  const checkList = new Array(100002).fill(0);

  let result = 0;

  let front = 0;
  let back = 0;

  checkList[list[front]]++;

  while (front < N) {
    if (checkList[list[back]] > K || back === N) {
      result = Math.max(back - front, result);

      checkList[list[front]]--;
      front++;
      continue;
    }

    back++;
    checkList[list[back]]++;
  }

  console.log(result);
}
