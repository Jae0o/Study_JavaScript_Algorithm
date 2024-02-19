const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = inputs.shift();
  solution(parseInt(N, 10), inputs.pop());
});

function solution(N, sheet) {
  const result = sheet.replace(/LL/g, "S").length + 1;

  if (N < result) {
    return console.log(N);
  }

  console.log(result);
}
