/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    const colors = {}
    const calculateColors = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] in colors) {
                colors[arr[i]] = colors[arr[i]] + 1
            } else {
                colors[arr[i]] = 1
            }
        }
    }
    calculateColors(nums)

    const swap = (arr, i, j) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    const valiateNextMove = (arr, i, j) => {
        const temp = arr[i] - 1;
        const deepTemp = arr[i] - 2;
        if (temp in colors) {
            if (colors[temp] > 0) {
                return sortColors(arr, i, j + 1)
            }
        }else if(deepTemp in colors){
            if (colors[deepTemp] > 0) {
                return sortColors(arr, i, j + 1)
            }
        }
        colors[arr[i]] = colors[arr[i]] - 1
        return sortColors(arr, i + 1, i + 2)
    }

    const sortColors = (arr, i, j) => {
        if (i < arr.length, j < arr.length) {
            if (arr[i] > arr[j]) {
                swap(arr, i, j)
                valiateNextMove(arr, i, j)
            }
            valiateNextMove(arr, i, j)
        }

    }
    const i = 0;
    const j = 1;
    sortColors(nums, i, j)
    return nums
};