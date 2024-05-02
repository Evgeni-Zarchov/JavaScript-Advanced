function rotateArr(arr, rotation) {
    for (let i = 0; i < rotation; i++) {
        let firstEl = arr.pop();
        arr.unshift(firstEl);
    }

    console.log(arr.join(' '));
}

rotateArr(['1', '2', '3', '4'], 2);

rotateArr(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15)