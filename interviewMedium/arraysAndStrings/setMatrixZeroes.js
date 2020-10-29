// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/777/
// SOLVED


function matrixZeroes(matrix) {
  let columnsWithZeros = {};
  let rowsWithZeros = {};

  function setRowZero(row) {
    for(var i = 0; i < matrix[row].length; i++) {
      if(matrix[row][i] === 0) {
        columnsWithZeros[i] = true;;
      } else {
        matrix[row][i] = 0
      }
    }
  }
  
  function setColumnZero(column) {
   matrix.map((row, index) => {
     if(row[column] === 0) {
      rowsWithZeros[index] = true;
     } else {
       row[column] = 0;
     }
   }) 
  }

  for(var row = 0; row < matrix.length; row++) {
    let rowHasZero = false;
    for(var i = 0; i < matrix[row].length; i++) {

      if(matrix[row][i] === 0 && !columnsWithZeros[i]) {
        setColumnZero(i);
        columnsWithZeros[i] = true;
        rowHasZero = true;
      }
    }

    if(rowHasZero || rowsWithZeros[row]) setRowZero(row);
  }

  return matrix;
}

// console.log(matrixZeroes([[1,1,1],[1,0,1],[1,1,1]])) //[[1,0,1],[0,0,0],[1,0,1]]
console.log(matrixZeroes([[0,0,0,5],[4,3,1,4],[0,1,1,4],[1,2,1,3],[0,0,1,1]]));
// [[0,0,0,0],[0,0,0,4],[0,0,0,0],[0,0,0,3],[0,0,0,0]]
