`use strict`;

const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs = input.split(".");
}).on("close", () => {
  console.log(solution(inputs));
});

function solution(arr) {
  let result = [];

  for (const item of arr) {
    if (item.length % 2 !== 0) {
      result = "-1";
      break;
    }

    if (item === "") {
      result.push("");
      continue;
    }

    if (item.length === 2) {
      result.push("BB");
      continue;
    }

    for (let i = 1; 1; i++) {
      const num = i * 4;
      if (num === item.length) {
        result.push("AAAA".repeat(i));
        break;
      }

      if (num + 2 === item.length) {
        result.push("AAAA".repeat(i) + "BB");
        break;
      }
    }
  }

  if (result === "-1") {
    return result;
  }

  return result.join(".");
}
