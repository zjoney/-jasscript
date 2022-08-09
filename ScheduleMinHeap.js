
/**
 * 向最小的堆添加元素
 * @param {*} heap 
 * @param {*} node 
 */
function push(heap, node) {
  const index = heap.length;
  heap.push(node);
  siftUp(heap, node, index)
}
/**
 * 向上调整
 * @param {*} heap 最小堆
 * @param {*} node 需要调整的节点
 * @param {*} index 当前节点索引
 */
function siftUp(heap, node, index) {
  let indec = i;
  while (true) {
    // Math.floor(index-1)/2
    const parentIndex = index - 1 >>> 1
    const parent = heap[parentIndex]
    //  大于 需要交换位置，向上调整
    if (parent !== undefined && compare(parent, node) > 0) {
      heap[parentIndex] = node;
      heap[index] = parent;
      index = parentIndex;
    } else {
      return ;
    }
  }
}

function compare(a, b) {
  const diff = a.sortIndex - b.sortIndex
  return diff;
}

module.export ={
  push, pop, peek
}