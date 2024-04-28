function largestNumber(num1, num2, num3) {
    const firstNumber = Number(num1);
    const secondNumber = Number(num2);
    const thirdNumber = Number(num3);

    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        console.log(`The largest number is ${firstNumber}.`);
    } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        console.log(`The largest number is ${secondNumber}.`);
    } else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
        console.log(`The largest number is ${thirdNumber}.`);
    }
}
largestNumber(5, -3, -22.5);
largestNumber(5, -3, 16);