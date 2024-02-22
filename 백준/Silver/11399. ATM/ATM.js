const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = inputs.shift();
  const arr = inputs[0].split(" ");

  solution(N, arr);
});

function solution(N, arr) {
  const array = arr.map((item) => parseInt(item, 10)).sort((a, b) => a - b);

  for (let i = 0; i < parseInt(N, 10); i++) {
    if (i === 0) {
      continue;
    }

    array[i] = array[i - 1] + array[i];
  }

  console.log(array.reduce((t, a) => (t += a)));
}