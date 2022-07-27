
// todo
function selectSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    // 最小值和第一个交换位置
    [arr[j], arr[minIndex]] = [arr[minIndex], arr[j]]
  }
  return arr;
}
// test
const arr = [3, 1, 2, 5, 4]
console.log(bubbleSort(arr)) // [1, 2, 3, 4, 5]
console.log(selectSort(arr)) // [1, 2, 3, 4, 5]
