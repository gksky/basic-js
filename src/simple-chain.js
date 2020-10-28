const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position >= 1 && position <= this.getLength()) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error('Неверный индекс');
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result;
    if (this.getLength() > 1) {
      result = this.chain.join('~~');
    } else result = this.chain[0];
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
