const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, M] = inputs[0].split(" ");
  const list = inputs[1].split(" ");

  solution(Number(N), Number(M), list.map(Number));
});

function solution(N, M, list) {
  let front = 0;
  let back = 0;

  let sumValue = list[0];

  let result = Infinity;

  while (front < N) {
    if (sumValue < M) {
      back++;

      if (back === N) {
        break;
      }

      sumValue += list[back];
      continue;
    }

    if (sumValue >= M) {
      result = Math.min(back - front + 1, result);

      sumValue -= list[front];
      front++;

      continue;
    }
  }

  if (result === Infinity) {
    return console.log(0);
  }

  console.log(result);
}
