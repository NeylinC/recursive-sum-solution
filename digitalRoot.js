function digitalRoot(num) {
    while (num.toString().length > 1) {
        let numSepArr = num.toString().split("").map(Number)
        //   console.log(numSepArr)
        let sumOfDigits = numSepArr.reduce(
            (a, b) => a + b);
        //   console.log(sumOfDigits)
        num = sumOfDigits
    }
    return num
}

console.log(digitalRoot(123))
console.log(digitalRoot(722025))
console.log(digitalRoot(987654321))
