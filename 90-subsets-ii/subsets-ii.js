/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const json = {}
    const res = [[]]

    const expansion = (arr, nextIndex) => {
        arr.sort()
        const stringifyArr = JSON.stringify(arr);
        if(!(stringifyArr in json)){
            res.push([...arr])
            json[stringifyArr] = 1
        }
       
        for (let i = nextIndex; i < nums.length; i++) {
            let temp = [...arr]
            temp.push(nums[i])
            expansion(temp, i+1)
        }
    }

    const iterate = () => {
        for (let i = 0; i < nums.length; i++) {
            let temp = []
            temp.push(nums[i])
            expansion([...temp], i+1)
        }
    }

    iterate()
    res.sort()
    return res
};