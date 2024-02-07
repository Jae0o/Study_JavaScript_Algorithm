const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(parseInt(input, 10));
}).on("close", () => {
  const N = inputs[0];

  for (let i = 1; i <= N; i++) {
    let result = "";
    result += " ".repeat(N - i);
    result += "*".repeat(i);
    console.log(result);
  }
});