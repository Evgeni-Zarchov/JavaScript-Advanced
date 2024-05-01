function equalNeighborsInMatrix(arr) {
    let counter = 0;

    for (let rows = 0; rows < arr.length; rows++) {
        let innerArray = arr[rows];

        for (let cols = 0; cols < innerArray.length; cols++) {
            if (rows - 1 < 0 || cols - 1 < 0) {
                continue;
            }

            if (arr[rows][cols] == arr[rows - 1][cols]) {
                counter++;
            }

            if (arr[rows][cols] == arr[rows][cols - 1]) {
                counter++;
            }
        }
    }

    console.log(counter);;
}

equalNeighborsInMatrix([
    [2,2,5,7,4],
    [4,0,5,3,4],
    [2,5,5,4,2]]);


// equalNeighborsInMatrix([
//     ['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']]
// );

// equalNeighborsInMatrix([
//     ['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']]
// );