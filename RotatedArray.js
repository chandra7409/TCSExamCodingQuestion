function binarySearch(arr, low,
    high, key) {
    if (high < low)
        return -1;

    let mid = Math.floor((low + high) / 2);
    if (key == arr[mid])
        return mid;

    if (key > arr[mid])
        return binarySearch(arr, (mid + 1), high, key);


    return binarySearch(arr, low, (mid - 1), key);
}


function findPivot(arr, low, high) {
    // base cases
    if (high < low)
        return -1;
    if (high == low)
        return low;

    let mid = Math.floor((low + high) / 2);
    if (mid < high && arr[mid] > arr[mid + 1])
        return mid;

    if (mid > low && arr[mid] < arr[mid - 1])
        return (mid - 1);

    if (arr[low] >= arr[mid])
        return findPivot(arr, low, mid - 1);

    return findPivot(arr, mid + 1, high);
}

function pivotedBinarySearch(arr, n, key) {
    let pivot = findPivot(arr, 0, n - 1);


    if (pivot == -1)
        return binarySearch(arr, 0, n - 1, key);

    if (arr[pivot] == key)
        return pivot;

    if (arr[0] <= key)
        return binarySearch(arr, 0, pivot - 1, key);

    return binarySearch(arr, pivot + 1, n - 1, key);
}


let arr1 = [4, 5, 6, 7, 0, 1, 2];
let n = arr1.length;
let key = 0;

console.log("Index of the element is : " +
    pivotedBinarySearch(arr1, n, key));