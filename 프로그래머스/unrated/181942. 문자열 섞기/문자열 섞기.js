function solution(str1, str2) {
    const arr1 = [...str1]
    const arr2 = [...str2]
    let result = ""
    for(let i = 0 ; i < arr1.length ; i +=1){
        result += arr1[i]
        result += arr2[i]
    }
    return result
}