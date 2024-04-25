const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = +inputs[0];

  solution(N);
});

function solution(N) {
  const list = Array.from({ length: N + 1 }, (_, index) => index + 1);

  let increase = 0;
  let current = 0;

  const result = [];

  while (increase <= current && current <= N) {
    const currentWeight = list[current] * list[current];
    const increaseWeight = list[increase] * list[increase];

    const calc = currentWeight - increaseWeight;

    if (calc <= N) {
      if (calc === N) {
        result.push(list[current]);
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