const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  inputs.reverse();
  const N = Number(inputs.pop());

  const testCase = [];

  for (let i = 0; i < N; i++) {
    const [N, M, T] = inputs.pop().split(" ").map(Number);
    const [S, G, H] = inputs.pop().split(" ").map(Number);

    const list = [];
    for (let j = 0; j < M; j++) {
      list.push(inputs.pop());
    }

    const array = [];

    for (let j = 0; j < T; j++) {
      array.push(Number(inputs.pop()));
    }

    testCase.push([N, M, T, S, G, H, list, array]);
  }

  for (const test of testCase) {
    solution(test);
  }
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

      this.swap(smaller, current);
      current = smaller;
      left = current * 2;
      right = current * 2 + 1;
    }

    return returnValue;
  }
}

function solution([N, M, T, S, G, H, list, array]) {
  const graph = {};

  for (const item of list) {
    const [start, end, distance] = item.split(" ").map(Number);

    if (!graph[start]) {
      graph[start] = [[end, distance]];
    } else {
      graph[start].push([end, distance]);
    }

    if (!graph[end]) {
      graph[end] = [[start, distance]];
    } else {
      graph[end].push([start, distance]);
    }
  }

  const di = (start) => {
    const queue = new MinHeap();
    const visited = new Array(N + 1).fill(Infinity);

    queue.push([start, 0]);
    visited[start] = 0;

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

  const diS = di(S);
  const diG = di(G);
  const diH = di(H);

  const result = [];
  for (const target of array) {
    const value = diS[target];

    if (value === Infinity) {
      continue;
    }

    if (
      value === diS[G] + diG[H] + diH[target] ||
      value === diS[H] + diH[G] + diG[target]
    ) {
      result.push(target);
    }
  }

  console.log(result.sort((a, b) => a - b).join(" "));
}
