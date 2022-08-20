function lowerBound(A, T) {
    let start = 0;
    let end = A.length - 1;
    let ans = -1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (T <= A[mid]) {
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

function upperBound(A, T) {
    let start = 0;
    let end = A.length - 1;
    let ans = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        //key element is smaller than mid element -> left
        if (T < A[mid]) {
            ans = mid;
            end = mid - 1;
        }
        //key element is grater than mid element -> right 
        else {
            start = mid + 1;
        }
    }
    if (ans == -1) {
        ans = A.length;
    }

    return ans;
}



function generateSubsetSumsRecur(arr, st, end, index, runningSum, sums) {
    if (index == end + 1) {
        (sums.push(runningSum) > 0);
        return;
    }
    generateSubsetSumsRecur(arr, st, end, index + 1, runningSum + arr[index], sums);
    generateSubsetSumsRecur(arr, st, end, index + 1, runningSum, sums);
}

function numberOfSubsets(arr, n, a, b) {
    let lowerBound = (A, T) => {
        let N = A.length,
            i = 0,
            j = N;
        while (i < j) {
            let k = Math.floor((i + j) / 2);
            if (A[k] < T)
                i = k + 1;
            else
                j = k;
        }
        return i;
    };

    let upperBound = (A, T) => {
        let N = A.length,
            i = 0,
            j = N;
        while (i < j) {
            let k = Math.floor((i + j + 1) / 2);
            if (A[k] <= T)
                i = k;
            else
                j = k - 1;
        }
        return A[j] <= T ? j + 1 : j;
    };
    var sums = new Array();
    generateSubsetSumsRecur(arr, 0, parseInt(n / 2), 0, 0, sums);
    var firstSubsetSums = sums.slice(0);

    var sums2 = new Array();
    generateSubsetSumsRecur(arr, parseInt(n / 2) + 1, n - 1, parseInt(n / 2) + 1, 0, sums2);
    var secondSubsetSums = sums2.slice(0);

    secondSubsetSums.sort(function(a, b) { return a - b; });
    var count = 0;
    for (var i = 0; i < firstSubsetSums.length; i++) {
        var p = lowerBound(secondSubsetSums, a - firstSubsetSums[i]) - secondSubsetSums[0];
        var q = upperBound(secondSubsetSums, b - firstSubsetSums[i]) - secondSubsetSums[0];
        count += (q - p);
    }
    return count;
}

function findLastIdxWithFalsePredicate(sums, val, pred) {
    var min = 0;
    var max = sums.length - 1;
    while (min < max) {
        var mid = min + parseInt((max - min + 1) / 2);
        if (pred.test(sums[mid], val)) {
            max = mid - 1;
        } else {
            min = mid;
        }
    }
    if (pred.test(sums[min], val)) {
        return -1;
    }
    return min;
}

var N = 3;
var A = -1;
var B = 2;
var arr = [1, -2, 3];
console.log(numberOfSubsets(arr, N, A, B));