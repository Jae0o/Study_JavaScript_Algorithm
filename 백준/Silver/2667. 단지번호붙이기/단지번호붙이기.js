const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')
const N = +input.shift()

const graph = Array.from({ length: N }, (_, i) => {
  const arr = []
  for (let j = 0; j < N; j += 1) {
    const value = +input[i][j] === 1 ? true : false
    arr.push(value)
  }
  return arr
})

const checkLIst = [
  [-1, 0], // 위
  [0, -1], // 왼
  [1, 0], // 아래
  [0, 1] // 오른
];

let totalCount = 0;
const result = [];

for (let i = 0; i < N; i += 1) {
  for (let j = 0; j < N; j += 1) {

    if (graph[i][j]) {
      const queue = [[i, j]]
      graph[i][j] = false
      let visitedCount = 0;

      while (queue.length !== 0) {
        const [L, R] = queue.shift()

        for (const [addL, addR] of checkLIst) {
          const checkL = L + addL;
          const checkR = R + addR;

          if (checkL === -1 || checkR === -1 || checkL === N || checkR === N) {
            continue;
          }

          if (graph[checkL][checkR]) {
            graph[checkL][checkR] = false;
            queue.push([checkL, checkR])
          }
        }
        
        visitedCount += 1
      }

      result.push(visitedCount)
      totalCount += 1
    }
  }
}
for (const item of [totalCount, ...result.sort((a, b) => a - b)]) {
  console.log(item)
}
