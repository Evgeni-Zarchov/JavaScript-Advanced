function townPopulation(input) {
    let townInfo = {};

    for (let el of input) {
        let [key, value] = el.split(' <-> ');
        let valNumber = Number(value);
        if (townInfo[key] === undefined) {
            townInfo[key] = 0;
        }

        townInfo[key] += valNumber;
    }

    let entries = Object.entries(townInfo);

    for (let [key, val] of entries) {
        console.log(`${key} : ${val}`);
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);