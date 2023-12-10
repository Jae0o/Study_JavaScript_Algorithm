const rl = require("readline").createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const arr = inputs.map((item) => item.split(" "));

  const result = solution(arr.slice(1, arr.length));

  console.log(result.join("\n"));
});

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enQueue(value) {
    this.queue[this.rear] = value;
    this.rear++;
  }

  deQueue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(arr) {
  const Que = new Queue();
  const msg = [];
  for (const [order, value] of arr) {
    if (order === "push") {
      Que.enQueue(value);
    }

    if (order === "pop") {
      Que.size() ? msg.push(Que.deQueue()) : msg.push(-1);
    }

    if (order === "size") {
      msg.push(Que.size());
    }

    if (order === "empty") {
      Que.size() ? msg.push(0) : msg.push(1);
    }

    if (order === "front") {
      Que.size() ? msg.push(Que.queue[Que.front]) : msg.push(-1);
    }

    if (order === "back") {
      Que.size() ? msg.push(Que.queue[Que.rear - 1]) : msg.push(-1);
    }
  }

  return msg;
}
