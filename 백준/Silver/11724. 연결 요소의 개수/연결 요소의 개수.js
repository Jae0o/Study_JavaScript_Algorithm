let fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./fs모듈/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ");

solution(parseInt(n, 10), input);

function solution(n, list) {
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const item of list) {
    const [start, end] = item.split(" ");

    graph[start].push(parseInt(end, 10));
    graph[end].push(parseInt(start, 10));
  }

  const visited = Array.from({ length: n + 1 }, () => false);
  visited[0] = true;

  let count = 0;

  for (let i = 0; i <= n; i++) {
    if (visited[i]) continue;

    count++;
    const stack = [i];

    while (stack.length !== 0) {
      const stackTop = stack[stack.length - 1];

      if (graph[stackTop] && graph[stackTop].length === 0) {
        visited[stackTop] = true;
        stack.pop();

        continue;
      }

      stack.push(graph[stackTop].pop());
    }
  }

  return console.log(count);
}
