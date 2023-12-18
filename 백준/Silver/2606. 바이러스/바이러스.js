const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = parseInt(inputs.shift(), 10);
  const M = inputs.shift();
  const arr = inputs.map((item) => item.split(" "));
  solution(N, M, arr);
});

function solution(N, M, arr) {
  const graph = Array.from({ length: N + 1 }, () => []);

  for (const [start, end] of arr) {
    graph[start].push(parseInt(end, 10));
    graph[end].push(parseInt(start, 10));
  }

  const isVisited = Array.from({ length: N + 1 }, () => false);
  isVisited[1] = true;
  const queue = [1];
  let count = 0;

  while (queue.length !== 0) {
    const value = queue.shift();

    for (const item of graph[value]) {
      if (!isVisited[item]) {
        isVisited[item] = true;
        count++;
        queue.push(item);
      }
    }
  }

  console.log(count);
}