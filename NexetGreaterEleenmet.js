let a = [];
for (let i = 0; i < n; i++) {
    if (arr[i] < arr[i + 1]) {
        a.push(arr[i + 1]);
    } else if (arr[i] > arr[i + 1]) {
        let max = arr[i];
        for (let j = i; j < n; j++) {
            if (arr[j] > max) {
                max = arr[j];
                // a.push(max);
                break;
            }
        }
        if (max > arr[i]) {
            a.push(max);
        } else {
            a.push(-1);
        }

    } else if (i == arr.length - 1) {
        a.push(-1);
    }
}
return a;
}