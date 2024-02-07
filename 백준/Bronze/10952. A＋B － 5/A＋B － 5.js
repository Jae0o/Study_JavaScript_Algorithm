const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  const [a, b] = input.split(" ");
  inputs.push([parseInt(a, 10), parseInt(b, 10)]);
}).on("close", () => {
  inputs.pop();
  for (const [a, b] of inputs) {
    console.log(a + b);
  }
});