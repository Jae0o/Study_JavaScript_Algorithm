const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const words = inputs[0].split("");

  solution(words);
});
function solution(words) {
  const obj = {};

  for (const word of words) {
    if (!obj[word]) {
      obj[word] = 1;
      continue;
    } else {
      obj[word] = obj[word] + 1;
    }
  }

  const entries = Object.entries(obj).sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  });

  let oddValue = "";

  let result = "";

  for (const [key, num] of entries) {
    if (num % 2 === 1) {
      if (oddValue) {
        return console.log("I'm Sorry Hansoo");
      }

      oddValue = key;
    }

    result += key.repeat(Math.floor(num / 2));
  }

  console.log(result + oddValue + [...result].reverse().join(""));
}
