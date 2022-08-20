function CutPrice(price, n) {
    let val = new Array(n + 1);
    val[0] = 0;
    for (let i = 0; i <= n; i++) {
        let max_val = Number.MIN_VALUE;
        for (let j = 0; j < i; j++) {
            max_val = Math.max(max_val, price[j] + val[i - j - 1]);
            val[i] = max_val;

        }

    }
    return val[n];
}
let arr = [3, 55, 8, 9, 10, 17, 17, 20];
let size = arr.length;
console.log(CutPrice(arr, size));