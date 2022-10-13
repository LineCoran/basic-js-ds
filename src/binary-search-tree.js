const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
    constructor() {
      this.arr = {
        values: [],
        data: null
      };
    }

  root() {
    if (this.arr.values.length > 0) {
      this.arr.data = this.arr.values[0];
      return this.arr;
    } else
    return null;
  }

  add(num) {
    this.arr.values.push(num)
  }

  has(num) {
    return (this.arr.values.indexOf(num) > -1)
  }

  find(num) {
    if (this.arr.values.indexOf(num) > -1) {
      this.arr.data = num;
      return this.arr;
    } else {
      return null
    }
  }

  remove(num) {
   this.arr.values.splice(this.arr.values.indexOf(num), 1);
  }

  min() {
    return Math.min.apply(null, this.arr.values)
  }

  max() {
    return Math.max.apply(null, this.arr.values)
  }
}


const tree = new BinarySearchTree();

module.exports = {
  BinarySearchTree
};