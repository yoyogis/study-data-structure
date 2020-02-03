exports.MaxHeap = class {
  constructor() {
    this.arr = [];
  }

  add(obj) {
    this.arr.push(obj);
    this.siftUp(this.arr.length - 1);
  }

  extract() {
    this.swap(0, this.arr.length-1);
    let result = this.arr.pop();
    this.siftDown(0);
    return result;
  }

  getSize() {
    return this.arr.length;
  }

  getParent(i) {
    if (i > 0 && i < this.getSize()) {
      return Math.round((i - 1) / 2);
    } else {
        console.error(this.arr);
      throw new Error(`节点${i}没有父节点`);
    }
  }

  getLeftChild(i) {
    if (i >= 0 && i < this.getSize()) {
      return i * 2 + 1;
    } else {
      throw new Error(`节点${i}不存在左节点`);
    }
  }

  getRightChild(i) {
    if (i >= 0 && i < this.getSize()) {
      return i * 2 + 2;
    } else {
      throw new Error(`节点${i}不存在右节点`);
    }
  }

  siftUp(i) {
    if (i > 0 && i < this.getSize()) {
      let parent = this.getParent(i);
      if (this.arr[parent] < this.arr[i]) {
        this.swap(parent, i);
        this.siftUp(parent);
      }
    }
  }

  siftDown(i) {
    if (i >= 0 && i < this.getSize()) {
      let left = this.getLeftChild(i);
      let right = this.getRightChild(i);
      let max = left;
      if(left<this.arr.length){
        if (right<this.arr.length&&this.arr[left] < this.arr[right]) {
            max = right;
          }
          if(this.arr[i]<this.arr[max]){
            this.swap(i, max);
            this.siftDown(max);
          }
      }
    }
  }

  swap(i, j) {
    let temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  }

  printTree(){

  }
};
