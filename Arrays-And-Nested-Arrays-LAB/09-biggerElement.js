function biggerElInMatrix(arr) {
    let bigger = Number.MIN_SAFE_INTEGER;
    for (let rows = 0; rows < arr.length; rows++) {
        let innerArr = arr[rows];

        for (let cols = 0; cols < innerArr.length; cols++) {
            if (arr[rows][cols] > bigger) {
                bigger = arr[rows][cols];
            }
        }
    }

    return bigger;

}

console.log(biggerElInMatrix([
    [20, 50, 10],
    [8, 33, 145]]
));

biggerElInMatrix([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
    );