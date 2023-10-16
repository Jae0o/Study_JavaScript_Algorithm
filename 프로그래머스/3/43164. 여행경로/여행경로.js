function solution(arr) {
    const graph = {}
    
    for (const [start , end] of arr){
        if(!graph[start]){
            graph[start] = []
        }
        graph[start].push(end)
        graph[start].sort((a,b) => b> a ? 1 : -1)
    }
    
    const stack = ["ICN"]
    const result = []
    
    while ( stack.length !== 0) {
        const value = stack[stack.length-1];
        
        if( graph[value] && graph[value].length !== 0){
            stack.push(graph[value].pop())
        } else {
            result.push(stack.pop())
        }
    }
    
    
    return result.reverse()
}