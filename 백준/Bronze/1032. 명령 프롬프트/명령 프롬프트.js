const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = Number(inputs.shift());
  solution(N, inputs);
});

function solution(N, list) {
  let result = "";

  const charLength = list[0].length;

  for (let i = 0; i < charLength; i++) {
    const current = list[0][i];

    let isSame = true;

    for (let j = 1; j < N; j++) {
      if (list[j][i] !== current) {
        isSame = false;
      }
    }

    if (isSame) {
      result += current;
    } else {
      result += "?";
    }
  }

  console.log(result);
}