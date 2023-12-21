const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [row, col] = inputs.shift().split(" ");
  const input = inputs.map((item) => item.split(""));
  solution(parseInt(row, 10), parseInt(col, 10), input);
});

const checkPoint = [
  [0, 1], // 오른쪽
  [1, 0], // 아래
  [0, -1], // 왼쪽
  [-1, 0], // 위
];

function solution(row, col, input) {
  const graph = Array.from({ length: row }, (_, i) => {
    const arr = [];
    for (let j = 0; j < col; j++) {
      const value = input[i][j] === "1" ? false : true;
      arr.push(value);
    }
    return arr;
  });

  const queue = [[0, 0]];
  graph[0][0] = 1;

  while (queue.length !== 0) {
    const [X, Y] = queue.shift();

    for (const [addValueX, addValueY] of checkPoint) {
      const sumX = X + addValueX;
      const sumY = Y + addValueY;
      if (sumX === -1 || sumY === -1 || sumX === row || sumY === col) continue;

      if (!graph[sumX][sumY]) {
        graph[sumX][sumY] = graph[X][Y] + 1;
        queue.push([sumX, sumY]);
      }
    }
  }

  console.log(graph[row - 1][col - 1]);
}
