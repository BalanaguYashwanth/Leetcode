/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = [[]]

    const expansion = (temp, index) => {
        res.push([...temp])
        for (let j = index; j < nums.length; j++) {
            const newTemp = [...temp]
            newTemp.push(nums[j])
            console.log('newTemp----', newTemp)
            expansion(newTemp, j+1)
        }
    }

    const iteration = () => {
        for (let i = 0; i < nums.length; i++) {
            const temp = []
            temp.push(nums[i])
            expansion(temp, i + 1)
        }
    }

    iteration()
    return res
};