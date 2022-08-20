function findLongestSub(bin) {
    let n = bin.length,
        i;


    let sum = 0;


    let prevSum = new Map();


    let maxlen = 0;


    for (i = 0; i < n; i++) {


        if (bin[i] == '0')
            sum++;
        else
            sum--;


        if (sum > 0) {
            maxlen = i + 1;
        } else if (sum <= 0)

        {
            if (prevSum.has(sum - 1)) {
                currlen = i - (prevSum.get(sum - 1) == null ? 1 :
                    prevSum.get(sum - 1));
                maxlen = Math.max(maxlen, currlen);
            }
        }


        if (!prevSum.has(sum))
            prevSum.set(sum, i);
    }
    return maxlen;
}


let arr = "1010001111";
console.log(findLongestSub(arr));