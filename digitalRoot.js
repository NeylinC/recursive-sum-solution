function digitalRoot(num) {
    while (num.toString().length > 1) {
        let numSepArr = num.toString().split("").map(Number)
        let sumOfDigits = numSepArr.reduce(
            (a, b) => a + b);
        num = sumOfDigits
    }
    return num
}
