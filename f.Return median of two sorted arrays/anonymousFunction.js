const findMedian= function(arr1, arr2) {
    const mergedArr = arr1.concat(arr2);
    mergedArr.sort((a, b) => a - b);
    const median = mergedArr[mergedArr.length / 2];
    return median;
}
let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];
console.log(findMedian(arr1, arr2));