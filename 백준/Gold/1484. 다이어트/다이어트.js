const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = +inputs[0];

  solution(N);
});

function solution(N) {
  let increase = 1;
  let current = 1;

  const result = [];

  while (increase <= current && current <= N) {
    const currentWeight = Math.pow(current, 2);
    const increaseWeight = Math.pow(increase, 2);

    const calc = currentWeight - increaseWeight;

    if (calc <= N) {
      if (calc === N) {
        result.push(current);
      }

      current++;
      continue;
    }

    if (calc > N) {
      increase++;
    }
  }

  if (!result.length) {
    console.log(-1);
  }

  console.log(result.join("\n"));
}