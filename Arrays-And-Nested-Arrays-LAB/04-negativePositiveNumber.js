function positiveNegative(arr) {
    let result = [];

    for (let el of arr) {
        if (el < 0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    }

    for (let num of result) {
        console.log(num);
    }
}

positiveNegative([7, -2, 8, 9]);
positiveNegative([3, -2, 0, -1]);