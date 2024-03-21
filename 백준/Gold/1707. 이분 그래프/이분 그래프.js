const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const testCaseLength = inputs.shift();

  inputs.reverse();

  for (let i = 0; i < +testCaseLength; i++) {
    const [V, E] = inputs.pop().split(" ");
    const testCase = [];

    for (let j = 0; j < +E; j++) {
      const [node1, node2] = inputs.pop().split(" ");
      testCase.push([Number(node1), Number(node2)]);
    }

    solution(Number(V), Number(E), testCase);
  }
});

function solution(V, E, testCase) {
  const graph = Array.from({ length: V + 1 }, () => []);
  const visited = Array.from({ length: V + 1 }, () => "NO_VISITED");

  visited[0] = "endPoint";

  for (const [node1, node2] of testCase) {
    graph[node1].push(node2);
    graph[node2].push(node1);
  }

  for (let i = 1; i <= V; i++) {
    if (visited[i] !== "NO_VISITED") continue;

    const queue = [[i, "left"]];

    while (queue.length) {
      const [node, location] = queue.shift();

      for (const nextNode of graph[node]) {
        // 같은 위치에 존재한다면 이분 그래프가 아님
        if (visited[nextNode] === location) {
          return console.log("NO");
        }

        if (visited[nextNode] === "NO_VISITED") {
          const nextLocation = location === "left" ? "right" : "left";
          visited[nextNode] = nextLocation;
          queue.push([nextNode, nextLocation]);
        }
      }
    }
  }

  console.log("YES");
}
