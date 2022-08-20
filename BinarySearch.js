function binarySearch(sortedArray, key) {
    return binarySearchHelper(sortedArray, key, 0, sortedArray.length - 1)
}

function binarySearchHelper(sortedArray, key, start, end) {
    let mid = 0;
    if (start > end) return -1;

    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] === key) {
        // found the key
        return middle;
    } else if (sortedArray[middle] < key) {
        // continue searching to the right
        binarySearchHelper(sortedArray, key, mid + 1, end)

    } else {
        // search searching to the left
        binarySearchHelper(sortedArray, key, mid, end - 1)
    }


}

let n = [3, 4, 5, 6, 7, 8, 9];
let key = 7;
console.log(binarySearch(n, key));