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

  while (front <= back && back < N) {
    const subtractValue = Math.abs(sortedList[front] - sortedList[back]);

    if (subtractValue < M) {
      back++;
      continue;
    }

    if (subtractValue > M) {
      front++;

      if (result > subtractValue) {
        result = subtractValue;
      }
    }

    if (subtractValue === M) {
      return console.log(subtractValue);
    }
  }

  console.log(result);
}