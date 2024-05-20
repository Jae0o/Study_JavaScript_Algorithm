const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const info = inputs.shift().split(" ").map(Number);

  solution(info, inputs);
});

function solution([N, M, K, X], list) {
  const graph = {};

  for (const item of list) {
    const [start, end] = item.split(" ");
    if (!graph[+start]) {
      graph[+start] = [+end];
      continue;
    }

    graph[+start].push(+end);
  }

  const visited = new Array(N + 1).fill(false);

  const queue = [X];
  visited[X] = 0;
  const result = [];

  while (queue.length) {
    const point = queue.shift();

    if (visited[point] === K) {
      result.push(point);
      continue;
    }

    if (!graph[point]) {
      continue;
    }

    for (const nextPoint of graph[point]) {
      if (nextPoint === X) {
        continue;
      }

      if (!visited[nextPoint]) {
        visited[nextPoint] = visited[point] + 1;
        queue.push(nextPoint);
      }
    }
  }

  if (result.length) {
    return console.log(result.sort((a, b) => a - b).join("\n"));
  }

  return console.log(-1);
}
