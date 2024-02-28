const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = inputs.shift();
  const arr = inputs
    .map((item) => item.split(" "))
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return parseInt(a[0]) - parseInt(b[0]);
      }

      return parseInt(a[1]) - parseInt(b[1]);
    });
  solution(arr);
});

function solution(arr) {
  let time = 0;
  let count = 0;

  for (const [start, end] of arr) {
    if (parseInt(start, 10) >= time) {
      time = parseInt(end, 10);
      count++;

      continue;
    }
  }

  console.log(count);
}
