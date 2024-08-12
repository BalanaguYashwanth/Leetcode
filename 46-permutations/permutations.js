/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [];

    const addRemainingElements = (temp) => {
        if(temp.length == nums.length){
            res.push(temp)
            return;
        }
       for(let i=0; i<nums.length; i++){
            const newTemp = [...temp]
            if(!temp.includes(nums[i])){
                newTemp.push(nums[i])
                addRemainingElements(newTemp)
            }
       }
    }

    const initialize = () => {
        for (let i = 0; i < nums.length; i++) {
            const temp = []
            temp.push(nums[i])
            addRemainingElements([...temp]);
        }
    }

    initialize()
    return res
};