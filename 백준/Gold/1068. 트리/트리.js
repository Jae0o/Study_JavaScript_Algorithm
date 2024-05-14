const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = inputs.shift();
  const list = inputs.shift().split(" ").map(Number);
  const remove = inputs.shift();

  solution(+N, list, +remove);
});

function solution(N, list, remove) {
  let rootNumber = 0;
  const graph = {};

  for (let i = 0; i < N; i++) {
    if (!graph[i]) {
      graph[i] = [];
    }

    if (list[i] === -1) {
      rootNumber = i;
      continue;
    }

    if (i === remove || list[i] === remove) {
      continue;
    }

    if (!graph[list[i]]) {
      graph[list[i]] = [];
    }

    graph[list[i]].push(i);
  }

  if (rootNumber === remove) {
    return console.log(0);
  }

  graph[remove] = [];

  const visited = new Array(N).fill(false);

  const stack = [rootNumber];

  let result = 0;

  while (stack.length) {
    const index = stack[stack.length - 1];

    if (graph[index].length) {
      visited[index] = true;
      stack.push(graph[index].pop());
    } else {
      stack.pop();

      if (!visited[index]) {
        result++;
      }
    }
  }

  console.log(result);
}
