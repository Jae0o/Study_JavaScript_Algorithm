const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  solution(inputs[0]);
});

function solution(text) {
  const list = text.split("-");
  let result = 0;

  list.forEach((item, index) => {
    const value = item.split("+").reduce((t, a) => (t += parseInt(a, 10)), 0);

    if (index === 0) {
      result = value;
      return;
    }

    result -= value;
  });

  console.log(result);
}
