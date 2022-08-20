function upperBound(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    let ans = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        //key element is smaller than mid element -> left
        if (key < arr[mid]) {
            ans = mid;
            end = mid - 1;
        }
        //key element is grater than mid element -> right 
        else {
            start = mid + 1;
        }
    }
    if (ans == -1) {
        ans = arr.length;
    }

    return ans;
}

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

function findSextuplets(arr, n) {
    // Generating possible values of
    // RHS of the equation
    var index = 0;
    var RHS = Array.from({ length: n * n * n + 1 },
        (_, i) => 0);
    for (i = 0; i < n; i++) {
        // Checking d should be non-zero.
        if (arr[i] != 0) {
            for (j = 0; j < n; j++) {
                for (k = 0; k < n; k++) {
                    RHS[index++] = arr[i] *
                        (arr[j] + arr[k]);
                }
            }
        }
    }

    RHS.sort((a, b) => a - b);


    var result = 0;
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            for (k = 0; k < n; k++) {
                var val = arr[i] * arr[j] + arr[k];
                result += (upperBound(RHS, index, val) -
                    lowerBound(RHS, index, val));
            }
        }
    }

    return result;
}

var arr = [2, 3];
var n = arr.length;
console.log(findSextuplets(arr, n));




// function upper_bound(array, length, value) {
//     var low = 0;
//     var high = length;
//     while (low < high) {
//         var mid = parseInt((low + high) / 2);
//         if (value >= array[mid]) {
//             low = mid + 1;
//         } else {
//             high = mid;
//         }
//     }
//     return low;
// }

// function lower_bound(array, length, value) {
//     var low = 0;
//     var high = length;
//     while (low < high) {
//         var mid = parseInt((low + high) / 2);
//         if (value <= array[mid]) {
//             high = mid;
//         } else {
//             low = mid + 1;
//         }
//     }
//     return low;
// }

// function findSextuplets(arr, n) {
//     // Generating possible values of
//     // RHS of the equation
//     var index = 0;
//     var RHS = Array.from({ length: n * n * n + 1 },
//         (_, i) => 0);
//     for (i = 0; i < n; i++) {
//         // Checking d should be non-zero.
//         if (arr[i] != 0) {
//             for (j = 0; j < n; j++) {
//                 for (k = 0; k < n; k++) {
//                     RHS[index++] = arr[i] *
//                         (arr[j] + arr[k]);
//                 }
//             }
//         }
//     }

//     RHS.sort((a, b) => a - b);


//     var result = 0;
//     for (i = 0; i < n; i++) {
//         for (j = 0; j < n; j++) {
//             for (k = 0; k < n; k++) {
//                 var val = arr[i] * arr[j] + arr[k];
//                 result += (upper_bound(RHS, index, val) -
//                     lower_bound(RHS, index, val));
//             }
//         }
//     }

//     return result;
// }

// var arr = [2, 3];
// var n = arr.length;
// console.log(findSextuplets(arr, n));