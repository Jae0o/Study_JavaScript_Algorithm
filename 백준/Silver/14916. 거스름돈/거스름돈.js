const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs;

rl.on("line", (input) => {
  inputs = parseInt(input, 10);
}).on("close", () => {
  solution(inputs);
});

function solution(num) {
  let count = num;
  let result = 0;

  while (true) {
    if (count % 5 === 0) {
      result += count / 5;
      break;
    }

    count -= 2;
    result++;

    if (count < 0) {
      result = -1;
      break;
    }
  }

  console.log(result);
}
