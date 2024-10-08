const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const reverse = inputs.reverse();
  const caseCount = reverse.pop();
  const testCase = [];

  for (let i = 0; i < caseCount; i++) {
    const N = reverse.pop();
    const list = [];

    for (let j = 0; j < N - 1; j++) {
      list.push(reverse.pop().split(" ").map(Number));
    }
    const [node1, node2] = reverse.pop().split(" ");

    testCase.push([+N, +node1, +node2, list]);
  }

  for (const [N, node1, node2, list] of testCase) {
    solution(N, node1, node2, list);
  }
});

function solution(N, node1, node2, list) {
  const graph = Array.from({ length: N + 1 }, () => []);

  for (const [parent, child] of list) {
    graph[child].push(parent);
  }

  const node1Visited = [node1];
  const node2Visited = [node2];

  for (let i = 0; i < 2; i++) {
    const visited = new Array(N + 1).fill(false);
    const queue = [];

    if (i === 0) {
      queue.push(node1);
      visited[node1] = true;
    } else {
      queue.push(node2);
      visited[node2] = true;
    }

    while (queue.length) {
      const curr = queue.shift();

      for (const node of graph[curr]) {
        if (visited[node]) {
          continue;
        }

        queue.push(node);
        visited[node] = true;

        if (i === 0) {
          node1Visited.push(node);
        } else {
          node2Visited.push(node);
        }
      }
    }
  }

  for (const target of node1Visited) {
    if (node2Visited.indexOf(target) !== -1) {
      return console.log(target);
    }
  }
}
