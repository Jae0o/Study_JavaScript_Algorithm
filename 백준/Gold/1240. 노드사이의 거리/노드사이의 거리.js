const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [M, N] = inputs.shift().split(" ");
  const Case = [];

  for (let i = 0; i < N; i++) {
    const [a, b] = inputs.pop().split(" ");
    Case[i] = [+a, +b];
  }

  for (const node of Case.reverse()) {
    solution(+M, inputs, node);
  }
});

function solution(M, nodeList, searchTarget) {
  const graph = Array.from({ length: M + 1 }, () => []);

  for (const item of nodeList) {
    const [start, end, score] = item.split(" ");

    graph[+start].push([+end, +score]);
    graph[+end].push([+start, +score]);
  }

  const visited = Array.from({ length: M + 1 }, () => false);
  visited[0] = true;

  const [startT, endT] = searchTarget;

  const queue = [[startT, 0]];
  visited[startT] = 0;

  while (queue.length) {
    const [point, currentScore] = queue.shift();

    for (const item of graph[point]) {
      const [nextPoint, nextScore] = item;

      if (!visited[nextPoint]) {
        const sumScore = currentScore + nextScore;
        visited[nextPoint] = sumScore;

        queue.push([nextPoint, sumScore]);
      }
    }
  }

  console.log(visited[endT]);
}
