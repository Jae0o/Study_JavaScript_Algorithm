const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [M, N] = inputs.shift().split(" ");

  const list = inputs.map((item) => item.split(""));

  solution(+N, +M, list);
});

const checkList = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function solution(M, N, list) {
  const visited = Array.from({ length: M }, () => {
    const arr = [];
    for (let i = 0; i < N; i++) {
      arr.push(false);
    }
    return arr;
  });

  let W = 0;
  let B = 0;

  for (let y = 0; y < M; y++) {
    for (let x = 0; x < N; x++) {
      if (!visited[y][x]) {
        const checkTarget = list[y][x];
        const queue = [[y, x]];
        visited[y][x] = true;

        let count = 1;

        while (queue.length) {
          const [currentY, currentX] = queue.shift();

          for (const [checkY, checkX] of checkList) {
            const sumY = currentY + checkY;
            const sumX = currentX + checkX;

            if (sumX < 0 || sumY < 0 || sumX >= N || sumY >= M) {
              continue;
            }

            if (list[sumY][sumX] === checkTarget && !visited[sumY][sumX]) {
              count++;

              queue.push([sumY, sumX]);
              visited[sumY][sumX] = true;
            }
          }
        }

        if (checkTarget === "W") {
          W += count * count;
        }

        if (checkTarget === "B") {
          B += count * count;
        }
      }
    }
  }

  console.log(`${W} ${B}`);
}
