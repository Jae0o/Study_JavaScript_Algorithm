const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const n = inputs.shift();
  solution(n, inputs);
});

const checkPoint = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];

function solution(size, array) {
  const [colSize, rowSize, totalCount] = size.split(" ");

  const graph = Array.from({ length: parseInt(colSize, 10) + 1 }, () => {
    const arr = [];

    for (let i = 0; i <= parseInt(rowSize, 10); i++) {
      arr.push(true);
    }

    return arr;
  });

  for (const dummyPoint of array) {
    const [dummyCol, dummyRow] = dummyPoint.split(" ");

    graph[parseInt(dummyCol, 10)][parseInt(dummyRow, 10)] = false;
  }

  let maxCount = 0;

  for (let col = 1; col <= colSize; col++) {
    for (let row = 1; row <= rowSize; row++) {
      // true 탐색

      if (graph[col][row]) continue;

      const queue = [[col, row]];
      graph[col][row] = true;
      let count = 1;

      // BFS 시작

      while (queue.length !== 0) {
        const [shiftCol, shiftRow] = queue.shift();

        for (const [checkedCol, checkedRow] of checkPoint) {
          const addCol = checkedCol + shiftCol;
          const addRow = checkedRow + shiftRow;

          // 각 좌표별로 검사

          if (
            addCol < 1 ||
            addRow < 1 ||
            addCol > colSize ||
            addRow > rowSize
          ) {
            continue;
          }

          if (!graph[addCol][addRow]) {
            queue.push([addCol, addRow]);
            graph[addCol][addRow] = true;
            count++;
          }
        }
      }
      maxCount = Math.max(count, maxCount);
    }
  }

  console.log(maxCount);
}