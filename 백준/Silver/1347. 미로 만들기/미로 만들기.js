const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  solution(inputs[1].split(""));
});

const move = {
  down: [1, 0],
  up: [-1, 0],
  left: [0, -1],
  right: [0, 1],
};

function solution(list) {
  let direction = "down";

  const point = [0, 0];

  const changeRight = () => {
    if (direction === "down") {
      return (direction = "left");
    }

    if (direction === "left") {
      return (direction = "up");
    }

    if (direction === "up") {
      return (direction = "right");
    }

    if (direction === "right") {
      return (direction = "down");
    }
  };

  const changeLeft = () => {
    if (direction === "down") {
      return (direction = "right");
    }

    if (direction === "right") {
      return (direction = "up");
    }

    if (direction === "up") {
      return (direction = "left");
    }

    if (direction === "left") {
      return (direction = "down");
    }
  };

  const pointer = [[0, 0]];

  let maxX = -99999;
  let maxY = -99999;

  let minX = 99999;
  let minY = 99999;

  for (const order of list) {
    if (order === "R") {
      changeRight();
      continue;
    }

    if (order === "L") {
      changeLeft();
      continue;
    }

    const [nextX, nextY] = move[direction];

    const currentX = point[0] + nextX;
    const currentY = point[1] + nextY;

    point[0] = currentX;
    point[1] = currentY;

    pointer.push([currentX, currentY]);

    maxX = Math.max(maxX, currentX);
    maxY = Math.max(maxY, currentY);
    minX = Math.min(minX, currentX);
    minY = Math.min(minY, currentY);
  }

  maxX = Math.max(maxX, 0);
  maxY = Math.max(maxY, 0);
  minX = Math.min(minX, 0);
  minY = Math.min(minY, 0);

  const N = maxX - minX + 1;
  const M = maxY - minY + 1;

  const graph = Array.from({ length: N }, () => new Array(M).fill("#"));

  for (const [x, y] of pointer) {
    graph[x - minX][y - minY] = ".";
  }

  console.log(graph.flatMap((s) => s.join("")).join("\n"));
}
