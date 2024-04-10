const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = inputs.shift();

  solution(N, inputs);
});

const checkList = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const BFS_twoColor = (N, graph) => {
  const visited = Array.from({ length: N }, () => {
    const arr = [];
    for (let i = 0; i < N; i++) {
      arr.push(false);
    }

    return arr;
  });

  let areaCount = 0;

  for (let loopX = 0; loopX < N; loopX++) {
    for (let loopY = 0; loopY < N; loopY++) {
      if (visited[loopX][loopY]) continue;

      areaCount++;

      const queue = [[loopX, loopY]];
      visited[loopX][loopY] = true;

      while (queue.length) {
        const [x, y] = queue.shift();
        const currentColor = graph[x][y];

        for (const [checkX, checkY] of checkList) {
          const sumX = x + checkX;
          const sumY = y + checkY;

          if (
            sumX < 0 ||
            sumY < 0 ||
            sumX >= N ||
            sumY >= N ||
            visited[sumX][sumY]
          ) {
            continue;
          }

          // 청일떼
          if (currentColor === "B" && graph[sumX][sumY] === "B") {
            visited[sumX][sumY] = true;
            queue.push([sumX, sumY]);
            continue;
          }

          // 적록일뗴

          if (
            currentColor !== "B" &&
            (graph[sumX][sumY] === "R" || graph[sumX][sumY] === "G")
          ) {
            visited[sumX][sumY] = true;
            queue.push([sumX, sumY]);
          }
        }
      }
    }
  }

  return areaCount;
};

const BFS_threeColor = (N, graph) => {
  const visited = Array.from({ length: N }, () => {
    const arr = [];
    for (let i = 0; i < N; i++) {
      arr.push(false);
    }

    return arr;
  });

  let areaCount = 0;

  for (let loopX = 0; loopX < N; loopX++) {
    for (let loopY = 0; loopY < N; loopY++) {
      if (visited[loopX][loopY]) continue;

      areaCount++;

      const queue = [[loopX, loopY]];
      visited[loopX][loopY] = true;

      while (queue.length) {
        const [x, y] = queue.shift();
        const currentColor = graph[x][y];

        for (const [checkX, checkY] of checkList) {
          const sumX = x + checkX;
          const sumY = y + checkY;

          if (
            sumX < 0 ||
            sumY < 0 ||
            sumX >= N ||
            sumY >= N ||
            visited[sumX][sumY]
          ) {
            continue;
          }

          if (currentColor === graph[sumX][sumY]) {
            visited[sumX][sumY] = true;
            queue.push([sumX, sumY]);
            continue;
          }
        }
      }
    }
  }

  return areaCount;
};

function solution(N, list) {
  const graph = list.map((line) => line.split(""));

  const two = BFS_twoColor(N, graph);
  const three = BFS_threeColor(N, graph);

  console.log(three);
  console.log(two);
}