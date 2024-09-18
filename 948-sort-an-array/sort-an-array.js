/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {

    const operate = (arrs) => {
        if (arrs.length < 2) {
            return;
        }
        // console.log('arrs--->', arrs)
        const mid = Math.ceil(arrs.length / 2)
        const left = arrs.slice(0, mid);
        const right = arrs.slice(mid, arrs.length);
        operate(left)
        operate(right)
        // console.log('left--->', left, 'right--->', right)
        merge(arrs, left, right)
    }

    const merge = (parentArr, left, right) => {
        let leftIndex = 0;
        let rightIndex = 0;
        let mainIndex = 0;
        // console.log('parentArr-->', parentArr, 'left---', left, 'right---', right)
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                parentArr[mainIndex] = left[leftIndex]
                mainIndex++;
                leftIndex++;
            } else {
                parentArr[mainIndex] = right[rightIndex]
                mainIndex++;
                rightIndex++;
            }
        }

        while (leftIndex < left.length) {
            parentArr[mainIndex] = left[leftIndex]
            mainIndex++;
            leftIndex++;
        }

        while (rightIndex < right.length) {
            parentArr[mainIndex] = right[rightIndex]
            mainIndex++;
            rightIndex++;
        }
        
    }

    operate(nums)
    return nums
};




