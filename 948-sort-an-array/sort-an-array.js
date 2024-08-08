/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    const mergeSort = (arr, len) => {
        if (arr.length < 2) {
            return;
        }
        const mid = Math.round(len / 2);
        const arr1 = arr.slice(0, mid);
        const arr2 = arr.slice(mid, arr.length);
        mergeSort(arr1, arr1.length);
        mergeSort(arr2, arr2.length);
        merge(arr, arr1, arr2)

    }
    mergeSort(nums, nums.length);
    return nums
};

const merge = (arr, arr1, arr2) => {
    let leftPointer = 0;
    let rightPointer = 0;
    let minPointer = 0;
    let mid = Math.min(arr1.length, arr2.length);

    while (leftPointer < arr1.length && rightPointer < arr2.length) {
        if (arr1[leftPointer] < arr2[rightPointer]) {
            arr[minPointer] = arr1[leftPointer];
            minPointer++
            leftPointer++
        } else {
            arr[minPointer] = arr2[rightPointer];
            minPointer++
            rightPointer++
        }
    }
    for (let i = leftPointer; i < arr1.length; i++) {
        arr[minPointer] = arr1[i];
        minPointer++
    }

    for (let j = rightPointer; j < arr2.length; j++) {
        arr[minPointer] = arr2[j];
        minPointer++
    }
}






