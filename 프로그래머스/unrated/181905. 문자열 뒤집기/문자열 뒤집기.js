function solution(my_string, s, e) {

    const text = my_string.slice(s,e+1)
    const reverseText = [...text]
    .reverse()
    .join("")
    
    return my_string.replace(text , reverseText)
}