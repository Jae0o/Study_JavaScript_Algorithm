const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = Number(inputs.shift());

  solution(N, inputs);
});

class MinHeap {
  constructor() {
    this.heap = [undefined];
    this.size = 0;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  push(newValue) {
    this.size++;
    this.heap.push(newValue);

    let current = this.size;
    let parent = ~~(current / 2);

    while (parent > 0 && this.heap[current][2] < this.heap[parent][2]) {
      this.swap(current, parent);

      current = parent;
      parent = ~~(current / 2);
    }
  }

  shift() {
    if (this.size === 0) {
      return null;
    }

    if (this.size === 1) {
      this.size--;
      return this.heap.pop();
    }
    this.size--;

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let current = 1;
    let left = current * 2;
    let right = current * 2 + 1;

    while (
      (this.size >= left && this.heap[current][2] > this.heap[left][2]) ||
      (this.size >= right && this.heap[current][2] > this.heap[right][2])
    ) {
      let smaller = current;

      if (this.size >= left && this.heap[smaller][2] > this.heap[left][2]) {
        smaller = left;
      }

      if (this.size >= right && this.heap[smaller][2] > this.heap[right][2]) {
        smaller = right;
      }

      this.swap(smaller, current);
      current = smaller;
      left = current * 2;
      right = current * 2 + 1;
    }

    return returnValue;
  }
}

const checkList = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function solution(N, list) {
  const graph = list.map((item) => item.split(""));

  const score = Array.from({ length: N }, () => new Array(N).fill(Infinity));

  const queue = new MinHeap();
  queue.push([0, 0, 0]);
  score[0][0] = 0;

  while (queue.size) {
    const [prevX, prevY, prevWall] = queue.shift();

    if (score[prevX][prevY] < prevWall) {
      continue;
    }

    if (prevX === N - 1 && prevY === N - 1) {
      console.log(prevWall);
      return;
    }

    for (const [nextX, nextY] of checkList) {
      const addX = nextX + prevX;
      const addY = nextY + prevY;

      if (addX < 0 || addY < 0 || addX >= N || addY >= N) {
        continue;
      }

      const nextWall = graph[addX][addY] === "0" ? prevWall + 1 : prevWall;

      if (score[addX][addY] > nextWall) {
        score[addX][addY] = nextWall;
        queue.push([addX, addY, nextWall]);
      }
    }
  }
}
