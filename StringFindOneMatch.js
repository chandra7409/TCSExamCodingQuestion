function findLongestSub(bin) {
    let n = bin.length,
        i;

    // To store sum.
    let sum = 0;

    // To store first occurrence of each
    // sum value.
    let prevSum = new Map();

    // To store maximum length.
    let maxlen = 0;

    // To store current substring length.
    let currlen;
    for (i = 0; i < n; i++) {

        // Add 1 if current character is 1
        // else subtract 1.
        if (bin[i] == '1')
            sum++;
        else
            sum--;

        // If sum is positive, then maximum
        // length substring is bin[0..i]
        if (sum > 0) {
            maxlen = i + 1;
        }

        // If sum is negative, then maximum
        // length substring is bin[j+1..i], where
        // sum of substring bin[0..j] is sum-1.
        else if (sum <= 0)

        {
            if (prevSum.has(sum - 1)) {
                currlen = i - (prevSum.get(sum - 1) == null ? 1 :
                    prevSum.get(sum - 1));
                maxlen = Math.max(maxlen, currlen);
            }
        }

        // Make entry for this sum value in hash
        // table if this value is not present.
        if (!prevSum.has(sum))
            prevSum.set(sum, i);
    }
    return maxlen;
}
let bin = "1010";
console.log(findLongestSub(bin));