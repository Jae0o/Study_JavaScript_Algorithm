const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, M, S] = inputs.shift().split(" ").map(Number);
  solution(N, M, S, inputs);
});

function solution(N, M, S, list) {
  const graph = list.map((item) => item.split(" ").map(Number));

  const change = () => {
    const visited = Array.from({ length: N }, () => new Array(M).fill(false));
    let loop = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (visited[i][j]) {
          continue;
        }

        let direction = 0;

        let x = i;
        let y = j;

        while (true) {
          if (visited[x][y]) {
            loop++;
            break;
          }

          // top
          if (direction === 0 && y === M - 1 - loop) {
            direction = (direction + 1) % 4;
          }

          // left
          if (direction === 3 && x === 0 + loop) {
            direction = (direction + 2) % 4;
          }

          // bottom
          if (direction === 2 && y === 0 + loop) {
            direction = (direction + 1) % 4;
          }

          // right
          if (direction === 1 && x === N - 1 - loop) {
            direction = (direction + 1) % 4;
          }

          let nextX = x;
          let nextY = y;

          if (direction === 0) {
            nextY += 1;
          }

          if (direction === 3) {
            nextX += -1;
          }

          if (direction === 2) {
            nextY += -1;
          }

          if (direction === 1) {
            nextX += 1;
          }

          if (nextX !== i || nextY !== j) {
            let current = graph[x][y];
            let next = graph[nextX][nextY];

            graph[nextX][nextY] = current;
            graph[x][y] = next;
          }

          visited[x][y] = true;

          x = nextX;
          y = nextY;
        }
      }
    }
  };

  for (let i = 0; i < S; i++) {
    change();
  }

  console.log(graph.map((item) => item.join(" ")).join("\n"));
}
