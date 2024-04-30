function biggerHalf(arr) {
    arr.sort((a, b) => a - b);

    let middlePart = arr.length / 2;

    let result = arr.slice(middlePart);

    console.log(result.join(' '));
}
biggerHalf([4,7,2,5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);