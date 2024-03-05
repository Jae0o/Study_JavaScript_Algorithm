const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [start, end] = inputs[0].split(" ");

  solution(+start, +end);
});

function solution(start, end) {
  let count = 0;
  const queue = [start];

  const visited = Array.from({ length: 100001 }, () => -1);
  visited[start] = 0;

  while (queue.length !== 0) {
    const value = queue.shift();
    if (value === end) {
      return console.log(visited[value]);
    }

    for (const item of [value - 1, value + 1, value * 2]) {
      if (visited[item] === -1 && item >= 0 && item <= 100000) {
        visited[item] = visited[value] + 1;
        queue.push(item);
      }
    }
  }

  console.log(queue);
}
