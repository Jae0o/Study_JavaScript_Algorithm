function solution(num, k) {
    const text = [ ...num.toString()]
    const result = parseInt(text.indexOf(k.toString()) )
    if(result > -1 ){
        return result+1
    }
    return result
}