/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
    let count = 0
    for (let row in matrix) {
        for (let col in matrix[row]) {
            if(matrix[row][col] > 0 && row > 0 && col > 0){
               matrix[row][col] = 
                    Math.min(matrix[row-1][col-1], matrix[row-1][col], matrix[row][col-1]) + 1;
            }
            count = count + matrix[row][col]
        }
    }
    return count
};