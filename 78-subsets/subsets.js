/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const finalArr = [[]]

    const deepAlgo = (arr, index) => {
        if(index < nums.length){
            finalArr.push([...arr, nums[index]])
            deepAlgo([...arr, nums[index]], index+1)
            deepAlgo([...arr], index+1)
        }
    }
  
    const addingElements = (arr, index) => {
        if(index < nums.length){
           finalArr.push([nums[index]])
           deepAlgo([nums[index]], index+1)
           addingElements(arr, index+1)
        }
    }

    addingElements([], 0)
    return finalArr;
};