function solution(arr, commands) {
    
const result = [];
    commands.map(item => {
        const a = arr.slice(item[0]-1,item[1]).sort((a,b)=>a-b)
        result.push(a[item[2]-1])
    })
    
    return result
}