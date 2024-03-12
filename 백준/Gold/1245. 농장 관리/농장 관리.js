const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, M] = inputs.shift().split(" ");

  solution(N, M, inputs);
});

const checkPoint = [
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
];

function solution(N, M, list) {
  const graph = list.map((item) => item.split(" ").map(Number));
  const visited = Array.from({ length: N }, () => {
    const arr = [];
    for (let i = 0; i < M; i++) {
      arr.push(false);
    }
    return arr;
  });

  let isMaxNumber = false;
  let result = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j]) {
        isMaxNumber = true;

        const queue = [[i, j]];
        visited[i][j] = true;

        while (queue.length) {
          const [n, m] = queue.shift();

          for (const [checkN, checkM] of checkPoint) {
            const sumM = checkM + m;
            const sumN = checkN + n;

            if (sumM >= M || sumM < 0 || sumN >= N || sumN < 0) {
              continue;
            }

            if (graph[n][m] < graph[sumN][sumM]) {
              isMaxNumber = false;
            }

            if (graph[n][m] === graph[sumN][sumM] && !visited[sumN][sumM]) {
              visited[sumN][sumM] = true;
              queue.push([sumN, sumM]);
            }
          }
        }

        if (isMaxNumber) {
          result++;
        }
      }
    }
  }

  console.log(result);
}
