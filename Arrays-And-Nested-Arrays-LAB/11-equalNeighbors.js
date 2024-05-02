function equalNeighborsInMatrix(arr) {
    let counter = 0;

    for (let cols = 0; cols < arr.length; cols++) {
        let innerArray = arr[cols];

        for (let rows = 0; rows < innerArray.length; rows++) {
            

            if (cols - 1 >= 0 && arr[cols][rows] == arr[cols - 1][rows]) {
                counter++;
            }

            if (rows - 1 >=0 && arr[cols][rows] == arr[cols][rows - 1]) {
                counter++;
            }
        }
    }

    return counter;
}

console.log(equalNeighborsInMatrix([
    [2,2,5,7,4],
    [4,0,5,3,4],
    [2,5,5,4,2]]));


console.log(equalNeighborsInMatrix([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
));

console.log(equalNeighborsInMatrix([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
));
// epxect 2 