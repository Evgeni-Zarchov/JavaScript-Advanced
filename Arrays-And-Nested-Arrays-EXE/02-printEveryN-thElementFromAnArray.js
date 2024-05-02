function printElement(arr, step) {
    let result = [];
    for (let i = 0; i < arr.length; i += step) {

        let currEl = arr[i];

        result.push(currEl);
        
    }
    console.log(result);
}

printElement(['5', '20', '31', '4', '20'], 2);
// expect 5,31,20

printElement(['dsa', 'asd', 'test', 'tset'], 2);
// expect dsa, test

printElement(['1', '2', '3', '4', '5'], 6);
// 1