const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = parseInt(inputs.shift(), 10);
  const [start, end] = inputs.shift().split(" ");
  inputs.shift();
  const input = inputs.map((item) => item.split(" "));
  solution(N, start, end, input);
});

function solution(N, start, end, input) {
  const graph = Array.from({ length: N + 1 }, () => []);

  for (const [st, ed] of input) {
    graph[st].push(parseInt(ed, 10));
    graph[ed].push(parseInt(st, 10));
  }

  const isChecked = Array.from({ length: N + 1 }, () => false);
  const queue = [start];
  isChecked[start] = 1;

  while (queue.length !== 0) {
    const item = queue.shift();

    for (const innerItem of graph[item]) {
      if (!isChecked[innerItem]) {
        queue.push(innerItem);
        isChecked[innerItem] = isChecked[item] + 1;
      }
    }
  }

  console.log(isChecked[end] ? isChecked[end] - 1 : -1);
}