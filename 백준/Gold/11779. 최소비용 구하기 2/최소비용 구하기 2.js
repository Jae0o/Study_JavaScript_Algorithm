const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = Number(inputs[0]);
  const M = Number(inputs[1]);
  const list = inputs.slice(2, M + 2);
  const info = inputs[M + 2].split(" ").map(Number);

  solution(N, M, info, list);
});

class MinHeap {
  constructor() {
    this.size = 0;
    this.queue = [undefined];
  }

  swap(index1, index2) {
    [this.queue[index1], this.queue[index2]] = [
      this.queue[index2],
      this.queue[index1],
    ];
  }

  push(newData) {
    this.queue.push(newData);
    this.size++;

    let current = this.size;
    let parent = ~~(current / 2);

    while (parent > 0 && this.queue[current][1] < this.queue[parent][1]) {
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
      return this.queue.pop();
    }

    this.size--;
    const returnValue = this.queue[1];
    this.queue[1] = this.queue.pop();

    let current = 1;
    let left = current * 2;
    let right = current * 2 + 1;

    while (
      (this.size >= left && this.queue[current][1] > this.queue[left][1]) ||
      (this.size >= right && this.queue[current][1] > this.queue[right][1])
    ) {
      let smaller = current;

      if (this.size >= left && this.queue[smaller][1] > this.queue[left][1]) {
        smaller = left;
      }

      if (this.size >= left && this.queue[smaller][1] > this.queue[left][1]) {
        smaller = left;
      }

      if (current === smaller) {
        break;
      }

      this.swap(smaller, current);

      current = smaller;
      left = current * 2;
      right = current * 2 + 1;
    }

    return returnValue;
  }
}

function solution(N, M, [S, E], list) {
  const graph = {};

  for (const item of list) {
    const [start, end, price] = item.split(" ").map(Number);

    if (!graph[start]) {
      graph[start] = [[end, price]];
      continue;
    }
    graph[start].push([end, price]);
  }

  const visited = Array.from({ length: N + 1 }, () => [Infinity, []]);

  const queue = new MinHeap();
  queue.push([S, 0, [S]]);
  visited[S][0] = 0;

  while (queue.size) {
    const [prevIndex, prevPrice, nodeList] = queue.shift();

    if (visited[prevIndex][0] < prevPrice) {
      continue;
    }

    if (!graph[prevIndex]) {
      continue;
    }

    for (const [nextIndex, price] of graph[prevIndex]) {
      const addPrice = price + prevPrice;

      if (visited[nextIndex][0] > addPrice) {
        const newNodeList = [...nodeList, nextIndex];

        visited[nextIndex][0] = addPrice;
        visited[nextIndex][1] = newNodeList;

        queue.push([nextIndex, addPrice, newNodeList]);
      }
    }
  }

  console.log(
    [visited[E][0], visited[E][1].length, visited[E][1].join(" ")].join("\n")
  );
}
