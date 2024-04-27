function stringLength(str1, str2, str3) {
    let sumOfStrings = str1.length + str2.length + str3.length;
    let averageSum = Math.floor(sumOfStrings / 3);

    console.log(sumOfStrings);
    console.log(averageSum);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');