function diagonalSum(arr) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let rows = 0; rows < arr.length; rows++) {
        firstDiagonal += arr[rows][rows];
        secondDiagonal += arr[rows][arr.length - 1 - rows];
    }

   console.log(`${firstDiagonal} ${secondDiagonal}`);
}

diagonalSum([
    [20, 40],
    [10, 60]
]);