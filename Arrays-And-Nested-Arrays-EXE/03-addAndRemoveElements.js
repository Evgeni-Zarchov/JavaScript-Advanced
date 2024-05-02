function addOrRemove(input) {
    // so i have to write a function that add-or-remove el from arr
    // i have to intialise the number start from 1 and to increase the number with 1 and if i recieve command add i have to add to my empty arr
    // i will do it with for of loop because i not need index
    let num = 0;
    let result = [];

    for (let command of input) {
        num++;

        if (command === 'add') {
            result.push(num);
        } else if (command === 'remove') {
            result.pop(num);
        }
    }

    if (result == 0) {
        return console.log('Empty');
    }

    return result.join('\n');
}

addOrRemove(['add', 'add', 'add', 'add']);
// expect 1,2,3,4
addOrRemove(['add', 'add', 'remove', 'add', 'add']);
// expect 1,4,5
addOrRemove(['remove', 'remove', 'remove']);
// expect Empty