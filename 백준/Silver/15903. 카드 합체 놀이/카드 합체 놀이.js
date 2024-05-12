const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, M] = inputs[0].split(" ");

  solution(N, M, inputs[1].split(" ").map(BigInt));
});

class Heap {
  constructor() {
    this.heap = [undefined];
  }

  push(newValue) {
    this.heap.push(newValue);

    let currentIndex = this.heap.length - 1;
    let parentIndex = ~~(currentIndex / 2);

    while (
      parentIndex !== 0 &&
      this.heap[currentIndex] < this.heap[parentIndex]
    ) {
      let parentValue = this.heap[parentIndex];

      this.heap[parentIndex] = newValue;
      this.heap[currentIndex] = parentValue;

      currentIndex = parentIndex;
      parentIndex = ~~(currentIndex / 2);
    }
  }

  shift() {
    if (this.heap.length === 1) {
      return null;
    }

    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const returnValue = this.heap[1];

    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = currentIndex * 2;
    let rightIndex = currentIndex * 2 + 1;

    while (
      (this.heap[leftIndex] &&
        this.heap[currentIndex] > this.heap[leftIndex]) ||
      (this.heap[rightIndex] && this.heap[currentIndex] > this.heap[rightIndex])
    ) {
      let smallIndex = leftIndex;

      if (
        this.heap[rightIndex] &&
        this.heap[rightIndex] < this.heap[smallIndex]
      ) {
        smallIndex = rightIndex;
      }

      [this.heap[currentIndex], this.heap[smallIndex]] = [
        this.heap[smallIndex],
        this.heap[currentIndex],
      ];

      currentIndex = smallIndex;
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

function solution(N, M, list) {
  const heap = new Heap();

  for (const number of list) {
    heap.push(number);
  }

  for (let i = 0; i < M; i++) {
    const sumValue = heap.shift() + heap.shift();

    heap.push(sumValue);
    heap.push(sumValue);
  }

  const returnList = heap.heap.filter((a) => a !== undefined);

  console.log(returnList.reduce((t, a) => (t += a), BigInt(0)).toString());
}
