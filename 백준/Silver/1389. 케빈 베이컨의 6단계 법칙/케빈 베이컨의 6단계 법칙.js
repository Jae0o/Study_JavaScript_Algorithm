const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, M] = inputs.shift().split(" ");
  const list = inputs.map((item) => item.split(" ").map(Number));

  solution(+N, +M, list);
});

function solution(N, M, list) {
  const graph = {};

  for (let i = 1; i <= N; i++) {
    graph[i] = [];
  }

  for (const [start, end] of list) {
    graph[start].push(end);
    graph[end].push(start);
  }

  let result = 10000000;
  const resultList = [];

  for (let i = 1; i <= N; i++) {
    const visited = new Array(N).fill(false);

    const queue = [i];
    visited[i - 1] = 0;

    while (queue.length) {
      const current = queue.shift();

      for (const target of graph[current]) {
        if (visited[target - 1] === false) {
          queue.push(target);
          visited[target - 1] = visited[current - 1] + 1;
        }
      }
    }

    const reduce = visited.reduce((t, a) => (t += a), 0);

    result = Math.min(result, reduce);
    resultList.push(reduce);
  }

  const answer = resultList.indexOf(result) + 1;
  console.log(answer);
}
