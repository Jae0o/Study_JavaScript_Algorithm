const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = +inputs.shift();

  solution(
    N,
    inputs.map((item) => item.split(" ").map(Number))
  );
});

function solution(N, list) {
  const sorted = list.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  let endTime = sorted[0][1];
  let count = 1;

  for (let i = 1; i < N; i++) {
    const [start, end] = sorted[i];

    if (start >= endTime) {
      endTime = end;
      count++;
    }
  }

  console.log(count);
}
