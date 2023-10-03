const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const array = input.slice(1, input.length).map(item => {
  item = item.split(" ")
  return ([+item[0], +item[1]])
})
input = input[0].split(" ").map(item => +item)

function DFS([a, b, c], array) {
  const graph = Array.from({ length: a + 1 }, () => [])
  for (const [start, end] of array) {
    graph[start].push(end)
    graph[end].push(start)
    graph[start].sort((a, b) => b - a)
    graph[end].sort((a, b) => b - a)

  }


  const stack = [c]
  const result = [];
  const check = Array.from({ length: a + 1 }, () => false)

  while (stack.length !== 0) {
    const stackpop = stack[stack.length - 1];
    if (!check[stackpop]) {
      check[stackpop] = true;
      result.push(stackpop)
    }

    if (graph[stackpop].length === 0) {
      stack.pop()
    } else {
      while (graph[stackpop].length !== 0) {
        const value = graph[stackpop].pop()

        if (!check[value]) {
          stack.push(value)
          break;
        }
      }

      // 만약 방문한 값이 아니라면 그때 stack 에 얺음!
    }
  }
  console.log(result.join(" "))
}

DFS(input, array)



function BFS([a, b, c], array) {
  const graph = Array.from({ length: a + 1 }, () => [])

  for (const [start, end] of array) {
    graph[start].push(end)
    graph[end].push(start)
    graph[start].sort((a, b) => a - b)
    graph[end].sort((a, b) => a - b)
  }

  const queue = [c];
  const check = Array.from({ length: a + 1 }, () => false)
  check[c] = true
  const result = [c]

  while (queue.length !== 0) {
    const value = queue.shift();

    for (const item of graph[value]) {
      if (!check[item]) {
        queue.push(item)
        check[item] = true
        result.push(item)
      }
    }
  }
  console.log(result.join(" "))
}
BFS(input, array)

