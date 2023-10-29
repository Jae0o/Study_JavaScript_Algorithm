function solution(arr, delete_list) {

    const result = arr.filter((item) => !delete_list.includes(item))
    return result
}