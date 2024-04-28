function aggregateEl(arr) {
    aggregate(arr, 0, (a, b) => a + b);
    aggregate(arr, 0, (a, b) => a + 1 / b);
    aggregate(arr, "", (a, b) => a + b);

    function aggregate(arr, count, func) {
        let result = count;
        for (let i = 0; i < arr.length; i++) {
            result = func(result, arr[i])
        }

        console.log(result);
    }
}

aggregateEl([1, 2, 3]);