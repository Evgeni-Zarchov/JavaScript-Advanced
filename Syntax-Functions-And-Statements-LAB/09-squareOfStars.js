function squareOfStars(input) {
    let result = '';

    for (let i = 1; i <= input; i++) {

        for (let j = 1; j <= input; j++) {
            result += '* ';
        }

        result += '\n';
    }

    console.log(result);
}

squareOfStars(5);