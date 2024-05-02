function increaseSubset(arr) {

    let biggerNumber = Number.MIN_SAFE_INTEGER;
    const result = [];

    for (let el of arr) {
        let currentNumber = el;

        if (currentNumber >= biggerNumber) {
            result.push(currentNumber);
            biggerNumber = currentNumber;
        }
    }

    return result;
}
increaseSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);