function solution(people, limit) {
    const array = people.sort((a,b)=> a-b)
    let count = 0;
    
    while(array.length > 0) {
        let high = array.pop()
        if( high <= limit && (high+array[array.length-1]) <= limit){
            array.pop()
            count++
            
        } else if( high  <= limit && (high+array[0]) <=limit){
            array.shift()
            count ++
        } else {
            count ++
        }
    }
    return count
}