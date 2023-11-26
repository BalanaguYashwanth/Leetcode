/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const sort=(i,j,arr)=>{
        if(i<arr.length && j<arr.length){
            if(arr[i] > arr[j]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
            j = j + 1
            return sort(i,j,arr)
        }else{
            if(i<arr.length){
                console.log('other---->',i,j,arr)
                i = i+1
                j = i+1
                return sort(i,j,arr)
            }
        }
    }
    let i=0;
    let j=1
    sort(i,j,nums)
};