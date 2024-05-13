const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = inputs.shift();

  solution(+N, inputs);
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

    while (current > 0 && this.heap[current] < this.heap[parent]) {
      this.swap(current, parent);

      current = parent;
      parent = ~~(current / 2);
    }
  }

  shift() {
    if (this.size === 0) {
      return "0";
    }

    if (this.size === 1) {
      this.size--;
      return this.heap.pop();
    }

    const returnValue = this.heap[1];

    this.heap[1] = this.heap.pop();
    let current = 1;
    let left = current * 2;
    let right = current * 2 + 1;

    while (
      (this.heap[left] && this.heap[current] > this.heap[left]) ||
      (this.heap[right] && this.heap[current] > this.heap[right])
    ) {
      let smaller = current;

      if (this.heap[smaller] > this.heap[left]) {
        smaller = left;
      }

      if (this.heap[smaller] > this.heap[right]) {
        smaller = right;
      }

      this.swap(current, smaller);

      current = smaller;
      left = current * 2;
      right = current * 2 + 1;
    }

    this.size--;
    return returnValue;
  }
}

function solution(N, list) {
  const minHeap = new MinHeap();

  const result = [];

  for (const item of list) {
    if (item !== "0") {
      minHeap.push(+item);
      continue;
    }

    result.push(minHeap.shift());
  }

  console.log(result.join("\n"));
}
