function sameNumbers(input) {
    let arr = input.toString().split("");

    let firstNumber = arr.shift();

    let sum = Number(firstNumber);
    let isTheSame = true;

    for (let currentNumber of arr) {
        sum += Number(currentNumber);

        if (firstNumber !== currentNumber) {
            isTheSame = false;
        }
    }

    console.log(isTheSame);
    console.log(sum);
}

sameNumbers(1234);
sameNumbers(2222222);
