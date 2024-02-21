const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = inputs.shift();
  solution(N, inputs);
});

class Queue {
  constructor() {
    this.queue = [];
    this.tail = 0;
    this.head = 0;
  }

  push(newValue) {
    this.queue.push(newValue);
    this.tail++;
  }

  size() {
    return this.tail - this.head;
  }

  shift() {
    const returnValue = this.queue[this.head];
    this.head++;

    return returnValue;
  }
}

function solution(N, arr) {
  const graph = Array.from({ length: N + 1 }, () => []);

  for (const node of arr) {
    const [A, B] = node.split(" ");

    graph[A].push(B);
    graph[B].push(A);
  }

  const results = Array.from({ length: N - 1 }, () => 0);

  const queue = new Queue();
  queue.push(1);

  while (queue.size() !== 0) {
    const value = queue.shift();

    for (const item of graph[value]) {
      if (!results[item - 2]) {
        // 결과
        results[item - 2] = value;
        queue.push(item);
      }
    }
  }

  console.log(results.join("\n"));
}
