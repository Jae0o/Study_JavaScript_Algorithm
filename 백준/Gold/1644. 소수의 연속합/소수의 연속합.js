const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = +inputs[0];

  solution(N);
});

function solution(N) {
  const primeList = makePrimeList(N);

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

function makePrimeList(num) {
  const primeList = [];
  const isVisited = [
    false,
    false,
    ...Array.from({ length: num - 1 }, () => true),
  ];

  for (let i = 2; i <= num; i++) {
    if (!isVisited[i]) {
      continue;
    }

    for (let j = i * 2; j <= num; j += i) {
      isVisited[j] = false;
    }
  }

  isVisited.forEach((isPrime, index) => {
    if (!isPrime) {
      return;
    }

    primeList.push(index);
  });

  return primeList;
}
