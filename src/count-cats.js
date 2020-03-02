module.exports = function countCats(matrix) {
  let catsArr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (matrix[i][k] == '^^') {
        catsArr.push(k);
      }
    }
  }
  return catsArr.length;
};
