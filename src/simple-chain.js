const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr.push(value);
    return this;
  },
  removeLink(position) {
    if ( typeof(position) != 'number' || position - 1 < 0 || position > this.getLength()) {
      this.chainArr = [];
      throw new Error();
    }
    else {
      this.chainArr.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let finishString = '';
    for (let i = 0 ; i < this.getLength(); i++) {
      if (i == this.getLength()-1) {
        finishString += `( ${this.chainArr[i]} )`
      }
      else {
        finishString += `( ${this.chainArr[i]} )~~`
      }
    }
    this.chainArr = []
    return finishString; 
  }
};

module.exports = chainMaker;
