const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = +inputs.shift();

  solution(N, inputs.map(Number));
});

function solution(N, list) {
  const scoreList = list.slice(1);
  let result = 0;

  let currentScore = list[0];
  let maxScoreIndex = scoreList.indexOf(Math.max(...scoreList));

  while (currentScore <= scoreList[maxScoreIndex]) {
    scoreList[maxScoreIndex] -= 1;
    result++;
    currentScore++;
    maxScoreIndex = scoreList.indexOf(Math.max(...scoreList));
  }

  console.log(result);
}