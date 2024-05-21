const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, M] = inputs.shift().split(" ").map(Number);
  const S = Number(inputs.shift());

  solution(N, M, S, inputs);
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
    const returnValue = [this.heap[1][0], this.heap[1][1]];

    this.heap[1] = this.heap.pop();

    let current = 1;
    let left = current * 2;
    let right = current * 2 + 1;

    while (
      (this.heap[left] &&
        this.heap[left][1] &&
        this.heap[left][1] < this.heap[current][1]) ||
      (this.heap[right] &&
        this.heap[right][1] &&
        this.heap[right][1] < this.heap[current][1])
    ) {
      let smaller = current;

      if (
        this.heap[left] &&
        this.heap[left][1] &&
        this.heap[left][1] < this.heap[smaller][1]
      ) {
        smaller = left;
      }

      if (
        this.heap[right] &&
        this.heap[right][1] &&
        this.heap[right][1] < this.heap[smaller][1]
      ) {
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

function solution(N, M, S, list) {
  const graph = {};

  for (let i = 1; i <= N; i++) {
    graph[i] = [];
  }

  for (const item of list) {
    const [start, end, distance] = item.split(" ").map(Number);

    graph[start].push([end, distance]);
  }

  const heap = new MinHeap();
  const visited = new Array(N).fill(Infinity);
  visited[S - 1] = 0;
  heap.push([S, 0]);

  while (heap.size) {
    const [index, value] = heap.shift();

    if (visited[index - 1] > value) {
      return;
    }

    for (const [end, distance] of graph[index]) {
      const total = distance + value;

      if (visited[end - 1] > total) {
        visited[end - 1] = total;
        heap.push([end, total]);
      }
    }
  }

  console.log(
    visited.map((item) => (item === Infinity ? "INF" : item)).join("\n")
  );
}
