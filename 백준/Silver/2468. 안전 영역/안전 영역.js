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

function solution(n, array) {
  let maxNum = 0;
  const graph = Array.from({ length: n }, (_, index) => {
    const arr = [];

    const split = array[index].split(" ");
    for (const item of split) {
      maxNum = Math.max(parseInt(item, 10), maxNum);
      arr.push(parseInt(item, 10));
    }

    return arr;
  });

  let safeArea = 0;

  for (let i = 0; i <= maxNum; i++) {
    const copyGraph = graph.map((arr) => {
      return arr.map((item) => (item > i ? item : null));
    });

    let count = 0;

    for (let col = 0; col < n; col++) {
      for (let row = 0; row < n; row++) {
        if (copyGraph[col][row]) {
          count++;
          const queue = [[col, row]];
          copyGraph[col][row] = null;

          while (queue.length !== 0) {
            const [targetCol, targetRow] = queue.shift();

            for (const [pointCol, pointRow] of checkPoint) {
              const addRow = targetRow + pointRow;
              const addCol = targetCol + pointCol;

              if (addRow < 0 || addCol < 0 || addRow >= n || addCol >= n) {
                continue;
              }

              if (copyGraph[addCol][addRow]) {
                copyGraph[addCol][addRow] = null;
                queue.push([addCol, addRow]);
              }
            }
          }
        }
      }
    }

    safeArea = Math.max(safeArea, count);
  }

  console.log(safeArea);
}