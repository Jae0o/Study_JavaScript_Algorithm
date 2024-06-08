const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, S, E] = inputs[0].split(" ").map(Number);

  solution(N, S, E);
});

function solution(N, S, E) {
  let total = N;
  let current = S;
  let target = E;

  let count = 1;

  while (total > 1) {
    if (
      (current + 1 === target && current % 2 === 1) ||
      (target + 1 === current && target % 2 === 1)
    ) {
      return console.log(count);
    }

    total = ~~(total / 2) + (total % 2);
    current = ~~(current / 2) + (current % 2);
    target = ~~(target / 2) + (target % 2);

    ++count;
  }

  if ((current === 1 && target === 2) || (target === 1 && current === 2)) {
    return console.log(count);
  }

  return -1;
}