class Sorter {
  constructor() {
    // your implementation
      this.array=[];
  }

  add(element) {
    // your implementation
      this.array.push(element);
  }

  at(index) {
    // your implementation
      return this.array[index];

  }

  get length() {
    // your implementation
      return this.array.length;
  }

  toArray() {
    // your implementation
      return this.array;
  }

  sort(indices) {
    // your implementation
      let arr=[];
      for (let i=0; i<indices.length; i++) {
        arr.push(this.array[indices[i]]);
      }
      indices.sort((a,b)=>a-b);
      if (!this.compare) {
        arr.sort((a,b)=>a-b);
      }
      else {
        arr.sort(this.compare);
      }
      for (let i=0; i<indices.length; i++) {
        this.array[indices[i]]=arr[i];
      }
  }

  setComparator(compareFunction) {
    // your implementation
      this.compare=compareFunction;

  }
}

module.exports = Sorter;