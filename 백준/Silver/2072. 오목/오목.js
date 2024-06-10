const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = Number(inputs.shift());

  solution(N, inputs);
});

const checkList = [
  [
    [1, 0],
    [-1, 0],
  ],
  [
    [0, 1],
    [0, -1],
  ],
  [
    [1, 1],
    [-1, -1],
  ],
  [
    [-1, 1],
    [1, -1],
  ],
];

function solution(N, list) {
  const graph = Array.from({ length: 21 }, () => new Array(21).fill(""));

  for (let i = 0; i < N; i++) {
    const [x, y] = list[i].split(" ").map(Number);
    const current = i % 2 === 0 ? "black" : "white";

    graph[x][y] = current;

    for (const lineList of checkList) {
      let count = 1;

      for (const [nextX, nextY] of lineList) {
        let addX = x + nextX;
        let addY = y + nextY;

        while (
          addX >= 1 &&
          addX <= 19 &&
          addY >= 1 &&
          addY <= 19 &&
          graph[addX][addY] === current
        ) {
          count++;
          addX += nextX;
          addY += nextY;
        }
      }

      if (count === 5) {
        return console.log(i + 1);
      }
    }
  }

  console.log(-1);
}
