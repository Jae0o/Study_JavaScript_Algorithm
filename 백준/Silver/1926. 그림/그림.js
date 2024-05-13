const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, M] = inputs.shift().split(" ");

  solution(
    N,
    M,
    inputs.map((item) => item.split(" ").map(Number))
  );
});

const checkList = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function solution(N, M, graph) {
  const visited = Array.from({ length: N }, () => {
    const array = [];

    for (let i = 0; i < M; i++) {
      array.push(false);
    }

    return array;
  });

  let result = 0;
  let picture = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (visited[i][j]) {
        continue;
      }

      if (graph[i][j] === 1) {
        picture++;

        let count = 1;
        const queue = [[i, j]];
        visited[i][j] = true;

        while (queue.length) {
          const [x, y] = queue.shift();

          for (const [checkX, checkY] of checkList) {
            const sumX = x + checkX;
            const sumY = y + checkY;

            if (sumX < 0 || sumY < 0 || sumX >= N || sumY >= M) {
              continue;
            }

            if (visited[sumX][sumY]) {
              continue;
            }

            visited[sumX][sumY] = true;
            if (graph[sumX][sumY] === 1) {
              count++;
              queue.push([sumX, sumY]);
            }
          }
        }

        result = Math.max(result, count);
      }
    }
  }

  console.log(picture);
  console.log(result);
}