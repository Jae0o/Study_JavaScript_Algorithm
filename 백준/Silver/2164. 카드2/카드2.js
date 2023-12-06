const rl = require("readline").createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = parseInt(inputs[0], 10);
  solution(N);
});
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enQueue(value) {
    this.queue.push(value);
    this.rear++;
  }

  deQueue() {
    const result = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;

    return result;
  }

  size() {
    return this.rear - this.front;
  }
}
function solution(N) {
  if (N < 2) return console.log(N);

  const queue = new Queue();

  for (let i = 0; i < N; i++) {
    queue.enQueue(i + 1);
  }

  while (queue.size() > 1) {
    if (queue.size() === 1) {
      return console.log(queue.queue[queue.front]);
    }
    queue.deQueue();

    if (queue.size() === 1) {
      return console.log(queue.queue[queue.front]);
    }
    queue.enQueue(queue.deQueue());
  }
}
