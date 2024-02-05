
const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = "";

rl.on("line", (input) => {
  inputs = input;
}).on("close", () => {
  solution(inputs);
});

function solution(text) {
  let result = text.replace(/XXXX/g, "AAAA");
  result = result.replace(/XX/g, "BB");

  if (result.includes("X")) {
    console.log("-1");
    return;
  }

  return console.log(result);
}
