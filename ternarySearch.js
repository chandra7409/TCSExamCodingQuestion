function ternarySearch(arr, key, start, end) {
    if (start > end) {
        return NaN;
    }
    let mid1 = Math.floor(start + (end - start) / 3);
    let mid2 = Math.floor(end - (end - start) / 3);
    console.log(start, end, mid1, mid2);
    if (arr[mid1] == key) {
        return mid1;


    }
    if (arr[mid2] == key) {
        return mid2;


    }
    if (key < arr[mid1]) {
        return ternarySearch(arr, key, start, mid1 - 1);
    } else if (key > arr[mid2]) {
        return ternarySearch(arr, key, mid2 + 1, end);
    } else {
        return ternarySearch(arr, key, mid1 + 1, mid2 - 1);
    }

}
let arr = [1, 2, 4, 6, 7, 10, 20, 50, 100, 200];
let start = 0;
let end = arr.length - 1;
let key = 50;
let position = ternarySearch(arr, key, start, end);
console.log(position);