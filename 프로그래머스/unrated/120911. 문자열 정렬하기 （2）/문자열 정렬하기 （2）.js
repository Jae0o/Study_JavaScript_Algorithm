function solution(a) {
    const text = [...a.toLowerCase()].sort()
    return text.join("")
}