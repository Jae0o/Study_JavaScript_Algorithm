const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const totalCount = +input.shift()
const solution = [];
for (let i = 0; i < totalCount; i += 1) {
  const [x, y, arr] = input.shift().split(" ")
  const array = [];
  for (let a = 0; a < arr; a += 1) {
    const value = input.shift().split(" ")
    array.push([+value[0], +value[1]])
  }
  solution.push([+x, +y, array])
}

const check = [
  [-1, 0], [1, 0], [0, -1], [0, 1]
]

function BFS([a, b, arr]) {
  const graph = Array.from({ length: a }, () => {
    const array = [];
    for (let i = 0; i < b; i += 1) {
      array.push(false)
    };
    return array
  })
  for (const [x, y] of arr) {
    graph[x][y] = true
  }

  let count = 0;
  // 그리고 true를 발견하면 bfs 를 실행할 루프 1개?
  // 그리고 bfs에서 방문하면 해당 위치를 false 로 만들고 bfs 가 끝나면 count +1

  for (let i = 0; i < a; i += 1) {
    for (let j = 0; j < b; j += 1) {

      // 0,0 부터 쭉끝까지 true를 찾는 루프
      // true 를 발견하면 ? BFS 를 시작함
      if (graph[i][j]) {

        // BFS 시작

        // 담아서 실행할 queue
        const queue = [[i, j]]

        // BFS
        while (queue.length > 0) {
          const [itemX, itemY] = queue.shift();

          for (const [checkX, checkY] of check) {
            const X = checkX + itemX
            const Y = checkY + itemY

            if (X >= 0 && Y >= 0 && X < a && Y < b) {

              if (graph[X][Y]) {
                queue.push([X, Y])
                graph[X][Y] = false
              }
            }
          }
        }
        count++
      }




    }
  }

  console.log(count)
}

for (const item of solution) {
  BFS(item)
}
