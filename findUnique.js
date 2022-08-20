// function searchFind(arr, start, end) {
//     if (start > end) {
//         return;
//     }
//     if (start == end) {
//         return start;
//     }
//     let mid = start + Math.floor((end - start) / 2);
//     if (mid % 2 == 0) {
//         if (arr[mid] = arr[mid + 1]) {
//             return searchFind(arr, mid + 2, end);
//         }
//     } else {
//         return searchFind(arr, start, end);
//     }

// } else {
//     if (arr[mid] == arr[mid - 1]) {
//         return searchFind(arr, mid + 1, end);
//     } else {

//         return searchFind(arr, start, end)
//     }
// }




function searchUnique(arr, start, end) {
    if (start > end) {
        return;
    }

    if (start == end) {
        return start;
    }
    let mid = start + Math.floor((end - start) / 2);
    if (mid % 2 == 0) {
        if (arr[mid] == arr[mid + 1]) {
            return searchUnique(arr, mid + 2, end);
        } else {

            return searchUnique(arr, start, mid);
        }
    } else {
        if (arr[mid] == arr[mid - 1]) {
            return searchUnique(arr, mid + 1, end);
        } else {
            return searchUnique(arr, start, mid);
        }
    }
}



let arr = [1, 1, 3, 3, 4, 5, 5, 7, 7, 9, 9, 11, 11, 15, 15];
let start = 0;
let end = arr.length - 1;
let position = searchUnique(arr, start, end);
console.log("element: ", arr[position], " position: ", position);