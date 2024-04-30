function evenPosition(arr) {
    let result = arr.filter((x, idx) => idx % 2 === 0).join(" ");
    console.log(result);
}

evenPosition(['20', '30', '40', '50', '60']);