const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, M] = inputs.shift().split(" ");

  solution(Number(N), Number(M), inputs.map(Number));
});

function solution(N, M, list) {
  const sortedList = list.sort((a, b) => a - b);

  let front = 0;
  let back = 0;

  let result = Infinity;

  while (front < N && back < N) {
    const subtractValue = Math.abs(sortedList[front] - sortedList[back]);

    if (subtractValue < M && back >= N) {
      return console.log(result);
    }

    if (subtractValue < M) {
      back++;
      continue;
    }

    if (subtractValue >= M) {
      front++;

      if (result > subtractValue) {
        result = subtractValue;
      }
    }
  }

  console.log(result);
}
