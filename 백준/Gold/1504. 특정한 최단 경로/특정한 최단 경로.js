const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, E] = inputs[0].split(" ").map(Number);
  const list = inputs.slice(1, E + 1);

  const info = inputs.pop().split(" ").map(Number);

  solution(N, E, info, list);
});

class Min {
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
    this.size++;
    this.queue.push(newData);

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
      (this.size >= left && this.queue[left][1] < this.queue[current][1]) ||
      (this.size >= right && this.queue[right][1] < this.queue[current][1])
    ) {
      let smaller = current;

      if (this.size >= left && this.queue[left][1] < this.queue[current][1]) {
        smaller = left;
      }

      if (this.size >= right && this.queue[right][1] < this.queue[current][1]) {
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

function solution(N, M, [S, E], list) {
  const graph = {};

  for (const item of list) {
    const [start, end, value] = item.split(" ").map(Number);

    if (!graph[start]) {
      graph[start] = [[end, value]];
    } else {
      graph[start].push([end, value]);
    }

    if (!graph[end]) {
      graph[end] = [[start, value]];
    } else {
      graph[end].push([start, value]);
    }
  }

  const di = (start, end) => {
    const visited = new Array(N + 1).fill(Infinity);

    const queue = new Min();
    visited[start] = 0;
    queue.push([start, 0]);

    while (queue.size) {
      const [prevPoint, prevValue] = queue.shift();

      if (visited[prevPoint] < prevValue) {
        continue;
      }

      if (!graph[prevPoint]) {
        continue;
      }

      for (const [nextPoint, value] of graph[prevPoint]) {
        if (nextPoint === start) {
          continue;
        }
        const addValue = value + prevValue;

        if (visited[nextPoint] > addValue) {
          visited[nextPoint] = addValue;
          queue.push([nextPoint, addValue]);
        }
      }
    }

    return visited[end];
  };

  const case1 = di(1, S) + di(S, E) + di(E, N);
  const case2 = di(1, E) + di(E, S) + di(S, N);

  const answer = Math.min(case1, case2);

  if (answer === Infinity) {
    return console.log(-1);
  }

  return console.log(answer);
}
