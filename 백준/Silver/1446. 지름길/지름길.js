const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, D] = inputs.shift().split(" ").map(Number);

  solution(N, D, inputs);
});

function solution(N, D, list) {
  const graph = {};

  for (const item of list) {
    const [start, end, distance] = item.split(" ").map(Number);

    if (end > D) continue;

    if (!graph[start]) {
      graph[start] = [[end, distance]];
      continue;
    }

    graph[start].push([end, distance]);
  }

  const score = new Array(D + 1).fill(Infinity);
  score[0] = 0;

  for (let i = 0; i <= D; i++) {
    if (i > 0) {
      score[i] = Math.min(score[i], score[i - 1] + 1);
    }

    if (graph[i]) {
      for (const [end, distance] of graph[i]) {
        if (score[end] > distance + score[i]) {
          score[end] = distance + score[i];
          continue;
        }
      }
    }
  }

  console.log(score[D]);
}
