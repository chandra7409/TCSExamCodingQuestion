function squareRoot(N, P) {
    let low = 1;
    let high = N;
    //let prec = pow(10, -P);
    let sqrt = 1;

    while (low <= high) {
        let mid = (low + high) / 2;
        sqrt = mid;

        // if the difference between square of current mid and N is less than precision, then break.
        if (fabs(mid * mid - N) <= prec)
            break;

        // decrementing high if answer lies between current low and mid
        else if (mid * mid > N)
            high = mid;

        // incrementing low if answer lies between mid and current high.
        else
            low = mid;
    }
    return round(sqrt * pow(10, P)) / pow(10, P);
}
let P = 5;
let N = 20;
console.log(squareRoot(20, 5));