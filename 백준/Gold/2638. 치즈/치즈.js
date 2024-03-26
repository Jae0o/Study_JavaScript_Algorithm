const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [M, N] = inputs.shift().split(" ");

  solution(Number(M), Number(N), inputs);
});

const checkList = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function solution(M, N, testCase) {
  const graph = testCase.map((item) => item.split(" "));

  let cheeseCount = 0;
  let resultTime = 0;

  for (const list of graph) {
    for (const item of list) {
      if (item === "1") {
        cheeseCount++;
      }
    }
  }

  const bfs = () => {
    resultTime++;

    const scoreBoard = Array.from({ length: M }, () =>
      Array.from({ length: N }, () => 0)
    );

    const visited = Array.from({ length: M }, () =>
      Array.from({ length: N }, () => false)
    );

    const queue = [[0, 0]];
    visited[0][0] = true;

    while (queue.length) {
      const [x, y] = queue.shift();

      for (const [checkX, checkY] of checkList) {
        const sumX = x + checkX;
        const sumY = y + checkY;

        if (sumX < 0 || sumY < 0 || sumX >= M || sumY >= N) {
          continue;
        }

        if (visited[sumX][sumY]) {
          continue;
        }

        if (graph[sumX][sumY] === "0") {
          queue.push([sumX, sumY]);
          visited[sumX][sumY] = true;
          continue;
        }

        scoreBoard[sumX][sumY]++;
      }
    }

    for (let i = 0; i < M; i++) {
      for (let j = 0; j < N; j++) {
        if (scoreBoard[i][j] > 1) {
          cheeseCount--;
          graph[i][j] = "0";
        }
      }
    }
  };

  while (cheeseCount) {
    bfs();
  }

  console.log(resultTime);
}
