const rl = require("readline").createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const arr = inputs.map((item) => item.split(" ")).slice(1, inputs.length);
  solution(arr);
});

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deck {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.size++;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
    }
    this.head = newNode;

    this.size++;
  }

  pop() {
    if (!this.size) return -1;

    const value = this.tail.value;

    this.size--;
    this.tail = this.tail.prev;

    if (this.size === 1) {
      this.head.next = 0;
    }

    if (this.size === 0) {
      this.head = null;
    }

    if (this.size > 1) {
      this.tail.next = null;
    }

    return value;
  }

  shift() {
    if (!this.size) return -1;

    const value = this.head.value;

    this.head = this.head.next;
    this.size--;

    if (this.size === 0) {
      this.tail = null;
    }

    if (this.size === 1) {
      this.tail.prev = null;
    }

    if (this.size > 1) {
      this.head.prev = null;
    }
    return value;
  }
}

function solution(arr) {
  const deck = new Deck();
  const result = [];

  for (const [order, value] of arr) {
    if (order === "1") {
      deck.unshift(value);
    }

    if (order === "2") {
      deck.push(value);
    }

    if (order === "3") {
      deck.size ? result.push(deck.shift()) : result.push("-1");
    }

    if (order === "4") {
      deck.size !== 0 ? result.push(deck.pop()) : result.push("-1");
    }

    if (order === "5") {
      result.push(deck.size);
    }

    if (order === "6") {
      deck.size ? result.push("0") : result.push("1");
    }

    if (order === "7") {
      deck.size ? result.push(deck.head.value) : result.push("-1");
    }

    if (order === "8") {
      deck.size ? result.push(deck.tail.value) : result.push("-1");
    }
  }

  console.log(result.join("\n"));
}
