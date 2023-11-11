function solution(my_string) {
    const arr = my_string.split(" ")
    let result = parseInt(arr[0])
    for(let i = 1 ; i < arr.length ; i ++){
        if(arr[i] === "+"){
            result += parseInt(arr[i+1])
        }
        if(arr[i] === "-"){
            result -= parseInt(arr[i+1])
        }
    }
    return result
}