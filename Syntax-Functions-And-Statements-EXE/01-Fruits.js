function fruits(fruits, weightInGram, pricePerFruit) {
    const fruitsInKilo = Number(weightInGram) / 1000;

    const totalPrice = fruitsInKilo * Number(pricePerFruit);

    const output = `I need $${totalPrice.toFixed(
        2
    )} to buy ${fruitsInKilo.toFixed(2)} kilograms ${fruits}.`;

    console.log(output);
}

fruits("orange", 2500, 1.8);

fruits("apple", 1563, 2.35);
