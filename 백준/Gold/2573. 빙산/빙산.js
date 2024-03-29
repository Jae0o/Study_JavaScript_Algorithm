const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [M, N] = inputs.shift().split(" ");
  const arr = inputs.map((item) => item.split(" "));

  solution(
    Number(M),
    Number(N),
    arr.map((line) => line.map(Number))
  );
});

const checkList = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function solution(M, N, arr) {
  let graph = [...arr];

  let landCount = 0;

  for (const line of graph) {
    for (const land of line) {
      if (land > 0) {
        landCount++;
      }
    }
  }

  let time = 0;

  while (landCount) {
    time++;

    const visited = Array.from({ length: M }, () =>
      Array.from({ length: N }, () => false)
    );

    const progressGraph = Array.from({ length: M }, (_, index) => [
      ...graph[index],
    ]);

    let isTwoLand = false;

    for (let i = 0; i < M; i++) {
      for (let j = 0; j < N; j++) {
        if (graph[i][j] < 1 || visited[i][j]) {
          continue;
        }

        if (isTwoLand) {
          return console.log(time - 1);
        }

        isTwoLand = true;
        const queue = [[i, j]];
        visited[i][j] = true;

        while (queue.length) {
          const [m, n] = queue.shift();

          for (const [checkM, checkN] of checkList) {
            const sumM = m + checkM;
            const sumN = n + checkN;

            if (sumM < 0 || sumN < 0 || sumM >= M || sumN >= N) continue;

            if (graph[sumM][sumN] < 1) {
              progressGraph[m][n]--;
            }

            if (!visited[sumM][sumN] && graph[sumM][sumN] > 0) {
              queue.push([sumM, sumN]);
              visited[sumM][sumN] = true;
            }
          }

          if (progressGraph[m][n] < 1) {
            landCount--;
          }
        }

        graph = progressGraph;
      }
    }
  }

  console.log(0);
}
