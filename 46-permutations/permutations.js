/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const finalArr = []
    const total = []
    let i = 0

    finalArr.push(nums)
    const joinedInitialArr = nums.join('')
    total.push(joinedInitialArr)

    const swap = (arr) => {

    }
    
    const settle = (i, arr) => {
       const cloneArr = [...arr]
       if(i<nums.length && arr.length <= nums.length ){
            if(arr.length>0){
                if(arr.includes(nums[i])){
                    i = i+1
                    return settle(i, [...arr])
                }
            }

            arr.push(nums[i])
            i=i+1
            settle(0, [...arr])
            settle(i, cloneArr)
        }
        if(arr.length === nums.length){
            const joinedArr = arr.join('')
            if(!total.includes(joinedArr)){
                total.push(joinedArr)
                finalArr.push(arr)
                swap(arr)
            }
        }
    }
    
    settle(i, [])
    return finalArr;
};