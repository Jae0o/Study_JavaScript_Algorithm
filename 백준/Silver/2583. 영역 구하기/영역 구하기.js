const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, M, K] = inputs.shift().split(" ").map(Number);

  solution(N, M, K, inputs);
});

const checkList = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function solution(N, M, K, list) {
  const graph = new Array(M).fill(null).map(() => new Array(N).fill(0));

  for (const item of list) {
    const [ax, ay, bx, by] = item.split(" ").map(Number);

    for (let x = ax; x < bx; x++) {
      for (let y = ay; y < by; y++) {
        graph[x][y]++;
      }
    }
  }

  let count = 0;
  const result = [];

  for (let x = 0; x < M; x++) {
    for (let y = 0; y < N; y++) {
      if (0 < graph[x][y]) {
        continue;
      }

      count++;

      graph[x][y]++;
      const queue = [[x, y]];
      let totalLength = 1;

      while (queue.length) {
        const [currentX, currentY] = queue.shift();

        for (const [checkX, checkY] of checkList) {
          const sumX = checkX + currentX;
          const sumY = checkY + currentY;

          if (sumX < 0 || sumY < 0 || sumX >= M || sumY >= N) {
            continue;
          }

          if (0 < graph[sumX][sumY]) {
            continue;
          }

          totalLength++;
          graph[sumX][sumY]++;
          queue.push([sumX, sumY]);
        }
      }

      result.push(totalLength);
    }
  }

  console.log(count);

  console.log(result.sort((a, b) => a - b).join(" "));
}
