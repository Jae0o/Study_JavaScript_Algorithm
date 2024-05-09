const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, M] = inputs.shift().split(" ").map(Number);

  const A = [];
  const B = [];

  const reversed = inputs.reverse();

  for (let i = 0; i < N; i++) {
    const list = reversed.pop().split("");
    A.push(list);
  }

  for (let i = 0; i < N; i++) {
    const list = reversed.pop().split("");
    B.push(list);
  }

  solution(N, M, A, B);
});

function solution(N, M, A, B) {
  let result = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (A[i][j] === B[i][j]) {
        continue;
      }

      result++;

      if (i + 2 >= N || j + 2 >= M) {
        return console.log(-1);
      }

      for (let addX = 0; addX < 3; addX++) {
        for (let addY = 0; addY < 3; addY++) {
          A[addX + i][addY + j] = A[addX + i][addY + j] === "1" ? "0" : "1";
        }
      }
    }
  }

  console.log(result);
}