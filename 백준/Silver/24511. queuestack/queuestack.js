const rl = require("readline").createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close", () => {
  const order = inputs[1].trim().split(" ");
  const initalValues = inputs[2].trim().split(" ");
  const insertValues = inputs[4].trim().split(" ");
  solution(order, initalValues, insertValues);
});

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;

    return value;
  }
}

function solution(order, initalValues, insertValues) {
  const result = [];
  const queue = new Queue();

  for (let i = order.length - 1; i >= 0; i--) {
    if (order[i] === "0") {
      queue.enqueue(initalValues[i]);
    }
  }

  insertValues.forEach((value) => {
    queue.enqueue(value);
    result.push(queue.dequeue());
  });

  console.log(result.join(" "));
}
