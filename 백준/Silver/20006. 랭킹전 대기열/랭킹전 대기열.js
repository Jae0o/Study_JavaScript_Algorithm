const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  const [N, M] = inputs.shift().split(" ").map(Number);
  solution(N, M, inputs);
});

function solution(N, M, list) {
  const room = [];

  for (const item of list) {
    const [level, id] = item.split(" ");
    let includeUser = false;

    for (let i = 0; i < room.length; i++) {
      const { count, member, maxLevel, minLevel } = room[i];

      if (count === M) {
        continue;
      }

      if (minLevel > +level || maxLevel < +level) {
        continue;
      }

      member.push(item);
      includeUser = true;
      room[i].count++;
      break;
    }

    if (!includeUser) {
      room.push({
        minLevel: +level - 10,
        maxLevel: +level + 10,
        member: [item],
        count: 1,
      });
    }
  }

  const result = [];

  for (const { member, count } of room) {
    if (count === M) {
      result.push("Started!");
    } else {
      result.push("Waiting!");
    }

    result.push(
      ...member.sort((a, b) => {
        const [aid, Aid] = a.split(" ");
        const [bid, Bid] = b.split(" ");

        return Aid.localeCompare(Bid);
      })
    );
  }

  console.log(result.join("\n"));
}
