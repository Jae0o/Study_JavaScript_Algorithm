const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, M] = inputs[0].split(" ");

  solution(N, M);
});

function solution(N, M) {
  const maxA = N.replace(/6|5/g, "6");
  const maxB = M.replace(/6|5/g, "6");

  const minA = N.replace(/6|5/g, "5");
  const minB = M.replace(/6|5/g, "5");

  const result = [+minA + +minB, +maxA + +maxB];
  console.log(result.join(" "));
}
