const Utils = {
  calculateNumber(type, a, b) {
    const n1 = Math.round(a);
    const n2 = Math.round(b);

    if (type === 'SUM') {
      return n1 + n2;
    }
    if (type === 'SUBTRACT') {
      return n1 - n2;
    }
    if (type === 'DIVIDE') {
      return b === 0 ? 'Error' : a / b;
    }
    return 0;
  },
};

module.exports = Utils;
