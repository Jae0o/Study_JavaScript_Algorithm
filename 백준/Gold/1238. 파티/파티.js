const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, M, X] = inputs[0].split(" ").map(Number);
  const list = inputs.slice(1, M + 1);

  solution(N, M, X, list);
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
    this.heap.push(newValue);
    this.size++;

    let current = this.size;
    let parent = ~~(current / 2);

    while (parent > 0 && this.heap[current][1] < this.heap[parent][1]) {
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
      (this.size >= left && this.heap[current][1] > this.heap[left][1]) ||
      (this.size >= right && this.heap[current][1] > this.heap[right][1])
    ) {
      let smaller = current;

      if (this.size >= left && this.heap[smaller][1] > this.heap[left][1]) {
        smaller = left;
      }

      if (this.size >= right && this.heap[smaller][1] > this.heap[right][1]) {
        smaller = right;
      }

      if (current === smaller) {
        break;
      }

      this.swap(current, smaller);

      current = smaller;
      left = current * 2;
      right = current * 2 + 1;
    }

    return returnValue;
  }
}

function solution(N, M, X, list) {
  const graph = {};

  for (const item of list) {
    const [start, end, distance] = item.split(" ").map(Number);

    if (!graph[start]) {
      graph[start] = [[end, distance]];
      continue;
    }

    graph[start].push([end, distance]);
  }

  const di = (startPoint) => {
    const visited = new Array(N + 1).fill(Infinity);
    visited[startPoint] = 0;
    const queue = new MinHeap();
    queue.push([startPoint, 0]);

    while (queue.size) {
      const [prevPoint, prevDistance] = queue.shift();

      if (visited[prevPoint] < prevDistance) {
        continue;
      }

      if (!graph[prevPoint]) {
        continue;
      }

      for (const [nextPoint, distance] of graph[prevPoint]) {
        const addDistance = distance + prevDistance;

        if (visited[nextPoint] > addDistance) {
          visited[nextPoint] = addDistance;
          queue.push([nextPoint, addDistance]);
        }
      }
    }

    return visited;
  };

  const result = di(X);

  for (let i = 1; i <= N; i++) {
    const go = di(i);

    result[i] = result[i] + go[X];
  }

  console.log(Math.max(...result.slice(1, N + 1)));
}
