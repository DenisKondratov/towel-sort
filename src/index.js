
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let resArr = [];
  if (!arguments.length) return resArr;
  else if (matrix.length == 0) return resArr;
  else if (matrix.length > 1 && Array.isArray(matrix[0])) {
      for (let i = 0; i < matrix.length; ++i) {
          if (i % 2 == 1) {
              matrix[i].reverse();  
          }
          resArr = matrix.reduce((resArr, currentArray) => resArr.concat(currentArray), [])
      }
      return resArr
  }
  else return matrix
}