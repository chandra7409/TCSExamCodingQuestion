function FindPages(arr, n, s, curr_min) {

    let studentsRequest = 1,
        curr_sum = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] > curr_min)
            return false;

        if (curr_sum + arr[i] > curr_min) {
            studentsRequest++;
            curr_sum = arr[i];
            if (studentsRequest > s) return false;
        } else
            curr_sum += arr[i];
    }
    return true;
}

function BinarySearch(arr, n, s) {
    let sum = 0;
    if (n < s) return -1;
    for (let i = 0; i < n; i++) sum += arr[i];
    let start = 0,
        end = sum;
    let result = Number.MAX_VALUE;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (FindPages(arr, n, s, mid)) {
            result = Math.min(result, mid);
            end = mid - 1;
        } else start = mid + 1;
    }
    return result;
}

let arr = [12, 34, 67, 90]; //Array of Books
let s = 2; //No. of students
console.log("Minimum number of pages = " + BinarySearch(arr, arr.length, s))