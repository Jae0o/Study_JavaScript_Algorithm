const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [start, end] = inputs[0].split(" ");

  solution(+start, +end);
});

function solution(start, end) {
  const check = Array.from({ length: 100010 }, () => ({
    visited: -1,
    count: 0,
  }));

  const queue = [start];
  check[start].visited = 0;
  check[start].count = 1;

  while (queue.length) {
    const index = queue.shift();

    for (const item of [index + 1, index - 1, index * 2]) {
      if (item <= 100000 && item >= 0) {
        if (check[item].visited === -1) {
          check[item].visited = check[index].visited + 1;
          check[item].count += check[index].count;
          queue.push(item);
        } else if (check[item].visited === check[index].visited + 1) {
          check[item].count += check[index].count;
        }
      }
    }
  }

  console.log(check[end].visited);
  console.log(check[end].count);
}
