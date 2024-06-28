
const checkList = [
    [1,0],
    [-1,0],
    [0,1],
    [0,-1]
]

function solution(land) {
    const N = land.length
    const M = land[0].length
    
    
    // 초기 맵핑하기
    const visited = new Array(N).fill().map(() => new Array(M).fill( false ))
    
    const score = {}
    
    for(let x = 0 ; x < N ; x ++){
        for(let y = 0 ; y < M ; y ++){
            
            if(land[x][y] !== 1 || visited[x][y] ){
                continue
            } 
            
            const targetList = [[x,y]]
            
            const queue = [[x,y]]
            visited[x][y] = true
            land[x][y] = `${x}${y}${x*y}`
            let count = 1
            
            while(queue.length){
                const [ currentX , currentY ] = queue.shift()
                
                for(const [ checkX , checkY ] of checkList){
                    const nextX = checkX + currentX
                    const nextY = checkY + currentY
                    
                    if(nextX < 0 || nextY < 0 || nextX >= N || nextY >= M ){
                        continue
                    }
                    
                    if(land[nextX][nextY] !== 1 || visited[nextX][nextY]){
                        continue
                    }
                    
                    targetList.push([nextX, nextY])
                    queue.push([nextX, nextY])
                    count++
                    visited[nextX][nextY] = true
                    land[nextX][nextY] = `${x}${y}${x*y}`
                }
            }
            
            score[`${x}${y}${x*y}`] = count
        }
    }
    
    
    let maxCount = 0
    for(let y = 0 ; y < M ; y ++){
        let pipeCount = 0
        let idList = new Set()
        
        for(let x = 0 ; x < N ; x ++){
            if(land[x][y] === 0){
                continue
            }
            
            idList.add(land[x][y])
        }
        
        idList.forEach((id)=> {
            pipeCount += score[id]
        })
        
        if(maxCount < pipeCount){
            maxCount = pipeCount
        }
    }
    
    return maxCount
}