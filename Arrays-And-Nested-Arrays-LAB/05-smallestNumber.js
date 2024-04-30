function smallestNumber(arr) {
    let myArr = arr.sort((a, b) => a - b).slice(0, 2).join(' ');

    console.log(myArr);
}

smallestNumber([30, 15, 50, 5]);
smallestNumber([3, 0, 10, 4, 7, 3]);