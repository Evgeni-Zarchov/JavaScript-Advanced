function sumOfNumbers(num1, num2) {
    const firstNum = Number(num1);
    const secondNumberNum = Number(num2);

    let result = 0;

    for (let i = firstNum; i <= secondNumberNum; i++) {
        result += i;
    }

    console.log(result);
}

sumOfNumbers('1', '5')