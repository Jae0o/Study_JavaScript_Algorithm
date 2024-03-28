const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const N = inputs.shift();

  const hateList = inputs.map((item) => item.split(" "));

  solution(Number(N), hateList);
});

function solution(N, hateList) {
  const graph = Array.from({ length: N + 1 }, () => []);

  for (let i = 0; i < N; i++) {
    const hate = hateList[i];
    for (let j = 1; j <= +hate[0]; j++) {
      const target = +hate[j];

      graph[i + 1].push(target);
      graph[target].push(i + 1);
    }
  }

  const visited = Array.from({ length: N + 1 }, () => 0);
  visited[0] = 9999;

  for (let i = 1; i <= N; i++) {
    if (visited[i]) {
      continue;
    }

    const queue = [[i, 1]];
    visited[1] = 1;

    while (queue.length) {
      const [number, team] = queue.shift();

      for (const hatePerson of graph[number]) {
        if (!visited[hatePerson]) {
          const otherTeam = team === 1 ? 2 : 1;
          visited[hatePerson] = otherTeam;
          queue.push([hatePerson, otherTeam]);
        }
      }
    }
  }

  const team1 = [];
  const team2 = [];

  for (let i = 1; i <= N; i++) {
    if (visited[i] === 1) {
      team1.push(i);
      continue;
    }

    team2.push(i);
  }

  console.log(team1.length);
  console.log(team1.join(" "));
  console.log(team2.length);
  console.log(team2.join(" "));
}
