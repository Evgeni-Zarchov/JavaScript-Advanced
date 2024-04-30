function sumElements(arr) {
    let firstEl = Number(arr[0]);
    let lastEl = Number(arr[arr.length - 1]);

    return firstEl + lastEl;
}

console.log(sumElements(['20', '30', '40']));
console.log(sumElements(['5',]));