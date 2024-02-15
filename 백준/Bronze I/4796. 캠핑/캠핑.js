const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  inputs.pop();

  for (let i = 0; i < inputs.length; i++) {
    const [L, P, V] = inputs[i].split(" ");

    solution(parseInt(L, 10), parseInt(P, 10), parseInt(V, 10), i);
  }
});

function solution(L, P, V, i) {
  let resultDay = Math.floor(V / P) * L;

  const remain = V % P;

  if (remain <= L) {
    resultDay += remain;
    console.log(`Case ${i + 1}: ${resultDay}`);
    return;
  }

  resultDay += L;
  console.log(`Case ${i + 1}: ${resultDay}`);
}
