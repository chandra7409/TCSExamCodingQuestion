function lowerBound(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    let ans = -1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (key <= arr[mid]) {
            ans = mid;
            end = mid - 1;

        } else {
            start = mid + 1;
        }
    }
    if (ans == -1) {
        ans = NaN;
    }
    return ans;

}
let arr = [2, 10, 14, 17, 25, 29, 34, 39, 41];
let key = 100;
let position = lowerBound(arr, key);
console.log("element", arr[position], "position", position);