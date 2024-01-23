const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const convertData = [];
  let arr = [];
  inputs.forEach((item, index) => {
    if (index === 0) {
      return;
    }

    if (index % 3 === 1) {
      arr.push(parseInt(item, 10));

      return;
    }

    if (index % 3 === 2) {
      const [x, y] = item.split(" ");
      arr.push([parseInt(x, 10), parseInt(y, 10)]);

      return;
    }

    if (index % 3 === 0) {
      const [x, y] = item.split(" ");
      arr.push([parseInt(x, 10), parseInt(y, 10)]);

      convertData.push(arr);
      arr = [];
    }
  });

  convertData.forEach(([l, start, end]) => {
    console.log(solution(l, start, end));
  });
});

const checkPoint = [
  [2, -1],
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
  [-2, -1],
  [-1, -2],
  [1, -2],
];

function solution(l, [startX, startY], [endX, endY]) {
  if (startX === endX && startY === endY) {
    return 0;
  }

  const graph = Array.from({ length: l }, () => {
    const arr = [];

    for (let i = 0; i < l; i++) {
      arr.push(0);
    }

    return arr;
  });

  graph[startX][startY] = 1;
  const queue = [[startX, startY]];

  while (queue.length !== 0) {
    const [currentX, currentY] = queue.shift();

    for (const [checkX, checkY] of checkPoint) {
      const addX = checkX + currentX;
      const addY = checkY + currentY;

      if (
        addX < 0 ||
        addY < 0 ||
        addX >= l ||
        addY >= l ||
        graph[addX][addY] !== 0
      ) {
        continue;
      }

      graph[addX][addY] = graph[currentX][currentY] + 1;
      queue.push([addX, addY]);
    }
  }

  return graph[endX][endY] - 1;
}
