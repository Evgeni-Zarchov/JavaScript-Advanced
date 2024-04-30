function sequence(n, k) {
    let currentSequence = [1];

    for (let i = 0; i < n; i++) {
        let newSequence = currentSequence.slice(-k);
        let sum = 0;
        for (let j = 0; j < newSequence.length; j++) {
            sum += newSequence[j];
        }

        currentSequence[i] = sum;
    }
    console.log(currentSequence.join(" "));
}
sequence(6, 3);
sequence(8, 2);