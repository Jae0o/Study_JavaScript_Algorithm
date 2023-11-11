function solution(s){
    const array = [...s];
    const result = [];
    if(array[0] === ")" || array[array.length-1] === "("){
        return false
    }
    for(let item of array){
        item ==="(" ? result.push(1) : result.pop()
    }
    return result.length === 0 ? true : false
}