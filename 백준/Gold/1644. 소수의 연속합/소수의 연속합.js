const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = +inputs[0];

  solution(N);
});

function solution(N) {
  const primeList = [];

  for (let i = 2; i <= N; i++) {
    if (isPrime(i)) {
      primeList.push(i);
    }
  }

  const primeListLength = primeList.length;

  let front = 0;
  let back = 0;

  let sumValue = 2;

  let count = 0;

  while (front <= back) {
    if (sumValue === N) {
      count++;

      if (back === primeListLength - 1) {
        sumValue -= primeList[front];
        front++;
        continue;
      }

      back++;
      sumValue += primeList[back];
      continue;
    }

    if (sumValue < N) {
      back++;
      sumValue += primeList[back];
      continue;
    }

    sumValue -= primeList[front];
    front++;
  }

  console.log(count);
}

function isPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}