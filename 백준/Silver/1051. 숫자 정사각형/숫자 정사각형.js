const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, M] = inputs.shift().split(" ").map(Number);

  solution(N, M, inputs);
});

function solution(N, M, list) {
  const graph = list.map((item) => item.split(""));

  let range = 1;

  for (let n = 0; n < N; n++) {
    for (let m = 0; m < M; m++) {
      const current = graph[n][m];

      for (let i = m + 1; i < M; i++) {
        const distance = i - m;

        if (n + distance >= N) {
          break;
        }

        if (
          current === graph[n][distance + m] &&
          current === graph[distance + n][m] &&
          current === graph[distance + n][distance + m]
        ) {
          range = Math.max(range, distance + 1);
        }
      }
    }
  }

  console.log(range * range);
}
