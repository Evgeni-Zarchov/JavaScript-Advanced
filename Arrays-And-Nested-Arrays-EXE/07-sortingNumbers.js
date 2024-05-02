function sortNumber(arrOfNums) {
    const result = [];
    let sorted = arrOfNums.sort((a, b) => a - b);

    while (sorted.length !== 0) {
        let firstEl = arrOfNums.shift();
        let secondEl = arrOfNums.pop();
        result.push(firstEl, secondEl);
    }

    return result;
}

sortNumber([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);