const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const array = input.slice(1, input.length).map(item => {
  item = item.split(" ")
  return ([+item[0], +item[1]])
})
input = input[0].split(" ").map(item => +item)

// a = 전체 정점 수 / b = 전체 간선 수 / c = 시작 정점
function DFS([a, b, c], array) {
  // 양방향 간선으로 인해 시작 도착을 동시에 넣어 만들기
  const graph = Array.from({ length: a + 1 }, () => [])
  for (const [start, end] of array) {
    graph[start].push(end)
    graph[end].push(start)
    // 그래프의 원하는 값안에 여러값이 존재할때 낮은 값 먼저 pop으로 빠질 수 있도록 정렬
    graph[start].sort((a, b) => b - a)
    graph[end].sort((a, b) => b - a)
  }
  // stack 으로 사용할 배열과 그안에 미리 넣는 시작지점
  const stack = [c]
  // 결과를 담을 result 배열
  const result = [];
  // 방문 처리를 위해 check 배열을 만들고 false 로 미리 세팅
  const check = Array.from({ length: a + 1 }, () => false)

  // 본격 DFS 시작
  while (stack.length !== 0) {
    // 매 루프마다 스택의 제일 위에값을 저장
    const stackpop = stack[stack.length - 1];
    // 만약 해당 값이 이번에 처음 방문하는 정점이라면?
    if (!check[stackpop]) {
      // 방문처리를위해 check에 true를 할당함
      check[stackpop] = true;
      // 이번 문제는 어떤 정점 순서로 방문 했냐 라는 문제이기때문에
      // 정점에 처음으로 방문했을때 해당 정점을 바로 result에 넣음
      result.push(stackpop)
    }

    // 만약 해당 정점에 방문 가능한 다른 정점이 없다면?
    if (graph[stackpop].length === 0) {
      // 스택에서 지워줌
      stack.pop()
      // 방문 가능한 정점이 존재한다면?
    } else {
      // 가장 중요한 부분
      // 존재하는 정점이 이전에 방문했던적이 있는 경우? 방문할 이유가 없음
      // 따라서 루프를 통해 걸러줌
      // 루프의 조건은 해당 정점의 아이템을 모두 검사할때까지 루프 실행
      while (graph[stackpop].length !== 0) {
        // 매 루프마다 해당 정점의 방문 가능한 정점중 낮은 순으로 pop을 통해 빼서 검사
        const value = graph[stackpop].pop()

        // 만약 방문가능한 정점이 방문 한적없는 정점이라면?
        if (!check[value]) {
          // 스택에 넣음
          stack.push(value)
          // 그리고 루프는 종료
          break;
        }
      }
      // 만약 stack에 넣을 값을 찾지 못하고 루프가 종료되면?
      // 이번 DFS 전체 루프에서는 stack에 아무 값도 pop이 되지 않아 똑같은값으로 다 루프가 실행됨
      // 하지만 이미 해당 정점의 이동가능한 정점은 모두 지워졌기때문에 pop 되어짐
    }
  }
  console.log(result.join(" "))
}
// DFS 실행
DFS(input, array)

// a = 전체 정점 수 / b = 전체 간선 수 / c = 시작 정점
function BFS([a, b, c], array) {
  // 양방향 간선으로 인해 시작 도착을 동시에 넣어 만들기
  const graph = Array.from({ length: a + 1 }, () => [])
  for (const [start, end] of array) {
    graph[start].push(end)
    graph[end].push(start)
    // queue 를 이용하기때문에 오른 정렬되도록 정렬
    graph[start].sort((a, b) => a - b)
    graph[end].sort((a, b) => a - b)
  }

  // BFS 에서 사용할 queue
  const queue = [c];
  // 방문 처리를 위한 check 와 미리 false로 맵핑
  const check = Array.from({ length: a + 1 }, () => false)
  // 시작과 동시에 미리 시작 정점 true 처리
  check[c] = true
  // 결과를 담을 result 배열에 시작 정점을 미리 넣음
  const result = [c]

  // BFS 시작
  while (queue.length !== 0) {
    // 미리 변수에 queue에서 맨 앞 정점을 꺼냄
    const value = queue.shift();

    // 해당 정점이 방문 가능한 모든 정점을 루프를 통해 검사
    for (const item of graph[value]) {
      // 해당 방문가능한 정점이 한번도 방문한적없는 정점이라면?
      if (!check[item]) {
        // queue에 방문가능한 정점을 넣어줌
        queue.push(item)
        // 그리고 해당 정점을 방문 처리해줌
        check[item] = true
        // result 배열에도 첫방문에 넣어줌
        result.push(item)
      }
    }
  }
  console.log(result.join(" "))
}
BFS(input, array)

