const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  solution(inputs[0]);
});

function solution(word) {
  const low = word.toUpperCase();

  const setList = new Set([...low]);

  let topWord = "";
  let max = 0;
  let count = 0;

  for (const target of setList.values()) {
    let wordCount = 0;

    for (const check of low) {
      if (target === check) {
        wordCount++;
      }
    }
    if (wordCount === max) {
      count++;
      continue;
    }

    if (wordCount > max) {
      max = wordCount;
      topWord = target;
      count = 0;
    }
  }

  if (count > 0) {
    return console.log("?");
  }

  console.log(topWord);
}
