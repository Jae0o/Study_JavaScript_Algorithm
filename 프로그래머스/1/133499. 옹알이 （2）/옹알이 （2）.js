function solution(babbling) {
    const reg1 = /(aya|ye|woo|ma)\1/
    const reg2 = /^(aya|ye|woo|ma)+$/

    const result = [];
    for (const b of babbling) {
        const A = reg1.exec(b)
        if (A) {
            continue
        }
        
        const B = reg2.exec(b)
        if (!B) {
            continue
        }

        result.push(b)
    }

    return result.length
}