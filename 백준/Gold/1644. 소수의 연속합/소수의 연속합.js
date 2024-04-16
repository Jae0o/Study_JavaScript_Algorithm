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

  while (back !== primeListLength) {
    if (sumValue <= N) {
      if (sumValue === N) {
        count++;
      }

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
  const isVisited = new Array(num + 1).fill(true);
  isVisited[0] = false;
  isVisited[1] = false;

  for (let i = 2; i <= num; i++) {
    if (!isVisited[i]) {
      continue;
    }

    primeList.push(i);

    for (let j = i * i; j <= num; j += i) {
      isVisited[j] = false;
    }
  }

  return primeList;
}
