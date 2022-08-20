// Find the 15 th term of the series ?
//     0, 0, 7, 6, 14, 12, 21, 18, 28
// Explanation:
//     In this series the odd term is increment of 7 { 0, 7, 14, 21, 28, 35–––––– }
// And even term is a increment of 6 { 0, 6, 12, 18, 24, 30–––––– }



function NumberSeries(n) {
    let i = 0;
    let a = 0;
    let b = 0;
    for (i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            a = a + 7;
        } else {
            b = b + 6;
        }
    }
    if (n % 2 != 0) {
        console.log("%d term of series is %d\t" + n, a - 7);
    } else {
        console.log("%d term of series is %d\t" + n, b - 6);
    }
    return 0;
}
let n = 16;
NumberSeries(n);