/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {

    const sort = (arr) => {
        if (arr.length < 2) {
            return
        }
        const mid = arr.length / 2
        const left = arr.slice(0, mid);
        const right = arr.slice(mid, arr.length);
        sort(left)
        sort(right)
        merge(left, right, arr)
    }

    const merge = (left, right, arr) => {
        let leftIndex = 0
        let rightIndex = 0
        let mainIndex = 0
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                arr[mainIndex] = left[leftIndex];
                mainIndex = mainIndex + 1;
                leftIndex = leftIndex + 1;
            } else {
                arr[mainIndex] = right[rightIndex]
                mainIndex = mainIndex + 1;
                rightIndex = rightIndex + 1;
            }
        }

        while(leftIndex < left.length){
            arr[mainIndex] = left[leftIndex];
            mainIndex = mainIndex + 1;
            leftIndex = leftIndex + 1;
        }

        while(rightIndex < right.length){
            arr[mainIndex] = right[rightIndex];
            mainIndex = mainIndex + 1;
            rightIndex = rightIndex + 1;
        }

        
    }

    sort(nums)
    return nums
};

