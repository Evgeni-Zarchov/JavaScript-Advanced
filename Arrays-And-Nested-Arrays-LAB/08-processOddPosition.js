function oddPosition(arr) {
    const result = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            sum = arr[i] * 2;
            result.push(sum)
        }
    }

    console.log(result.reverse().join(' '));
}

oddPosition([10, 15, 20, 25]);
oddPosition([3, 0, 10, 4, 7, 3]);