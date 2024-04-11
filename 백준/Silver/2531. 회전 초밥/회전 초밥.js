const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const condition = inputs.shift().split(" ").map(Number);

  solution(condition, inputs.map(Number));
});

function solution([N, D, K, C], list) {
  const checkList = Array.from({ length: D + 1 }, () => 0);

  checkList[C] = 1;

  let kind = 1;

  for (let i = 0; i < K; i++) {
    if (checkList[list[i]] === 0) {
      checkList[list[i]] = 1;
      kind++;

      continue;
    }

    checkList[list[i]]++;
  }

  let max = kind;

  for (let i = 0; i < N; i++) {
    const front = list[i];
    const back = list[(i + K) % N];

    if (checkList[front] === 1) {
      kind--;
    }
    checkList[front]--;

    if (checkList[back] === 0) {
      kind++;
    }

    checkList[back]++;

    max = Math.max(max, kind);
  }

  console.log(max);
}
