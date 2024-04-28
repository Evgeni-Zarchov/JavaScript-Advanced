function mathOperations(num1, num2, operator) {
    const firstNumber = Number(num1);
    const secondNumber = Number(num2);
    let result = 0;

    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
        case "%":
            result = firstNumber % secondNumber;
            break;
        case "**":
            result = firstNumber ** secondNumber;
            break;
    }

    console.log(result);
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');