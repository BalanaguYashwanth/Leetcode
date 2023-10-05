/**
 * @param {number} numRows
 * @return {number[][]}
 */

const add_sum = (arr) => {
    const new_arr = [1,]
    let sum_output = 0
    for(let i=0;i<(arr.length)-1;i++){
        sum_output = arr[i]+arr[i+1]
        new_arr.push(sum_output)
    }
    new_arr.push(1)
    return new_arr
}

var generate = function(numRows) {
    const initial = [[1],[1,1]]
    if(numRows>1){
        for(i=1;i<numRows-1;i++){
             const output = add_sum(initial[i])
             initial.push(output)
        }
    }else{
        return [initial[numRows-1]]
    }
    return initial
};