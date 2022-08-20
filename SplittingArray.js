function verify(mid, array, n, K) {
    var count = 0;
    var sum = 0;
    for (var i = 0; i < n; i++) {


        if (array[i] > mid)
            return false;


        sum += array[i];

        if (sum > mid) {
            count++;
            sum = array[i];
        }
    }
    count++;


    if (count <= K)
        return true;
    return false;
}


function splitArray(array, n, K) {
    var max = array.reduce((a, b) => Math.max(a, b));
    var start = max;
    var end = 0;

    for (var i = 0; i < n; i++) {
        end += array[i];
    }


    var answer = 0;
    while (start <= end) {
        var mid = parseInt((start + end) / 2);


        if (verify(mid, array, n, K)) {
            answer = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return answer;
}

var array = [1, 3, 2, 4, 10, 8, 4, 2, 5, 3];
var n = array.length;
var K = 4;
console.log(splitArray(array, n, K));