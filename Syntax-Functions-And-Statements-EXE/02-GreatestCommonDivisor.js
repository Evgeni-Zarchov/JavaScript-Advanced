function greaterDivisor(firstNum, secondNum) {
    while (secondNum) {
        let temp = secondNum;
        secondNum = firstNum % secondNum;
        firstNum = temp;
    }

    console.log(firstNum);
}

greaterDivisor(15, 5);