function magicMatrix(arr) {
    let sum = arr[0].reduce((acc, val) => acc + val, 0);

    for (let rows = 0; rows < arr.length; rows++) {
        let rowSum = 0;
        let colSum = 0;
        for (let cols = 0; cols < arr.length; cols++) {
            rowSum += arr[cols][rows];
            colSum += arr[rows][cols];
        }

        if (sum !== rowSum || sum !== colSum) {
            return false;
        }

    }

    return true;
}

console.log(magicMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));

console.log(magicMatrix([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
));