const rl = require("readline").createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = inputs.shift();
  const arr = inputs.map((item) => item.split(" "));

  solution(arr);
});

function solution(arr) {
  const stack = [];
  const result = [];

  for (const order of arr) {
    if (order[0] === "1") {
      stack.push(order[1]);
    }

    if (order[0] === "2") {
      const value = stack.pop();
      value ? result.push(value) : result.push("-1");
    }

    if (order[0] === "3") {
      result.push(stack.length);
    }

    if (order[0] === "4") {
      stack.length ? result.push("0") : result.push("1");
    }

    if (order[0] === "5") {
      stack.length ? result.push(stack[stack.length - 1]) : result.push("-1");
    }
  }

  console.log(result.join("\n"));
}
