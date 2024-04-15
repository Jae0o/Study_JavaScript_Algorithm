const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = inputs[0];
  const list = inputs[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  solution(+N, list);
});

function solution(N, list) {
  let result = Infinity;
  let resultList = [];

  for (let i = 0; i < N; i++) {
    const loopValue = list[i];

    let front = i + 1;
    let back = N - 1;

    while (front < back) {
      const sumValue = loopValue + list[front] + list[back];

      if (Math.abs(sumValue) < result) {
        result = Math.abs(sumValue);
        resultList = [i, front, back];
      }

      if (0 < sumValue) {
        back--;
        continue;
      }

      front++;
    }
  }

  console.log(resultList.map((index) => list[index]).join("\n"));
}