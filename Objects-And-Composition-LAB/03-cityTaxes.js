function cityRecord(name, population, treasury) {
    let cityInfo = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },

        applyGrowth(percent) {
            this.population += this.population * percent / 100;
        },

        applyRecession(percentage) {
            this.treasury -= this.treasury * percentage / 100;
        },
    };

    return cityInfo;
}

let result = cityRecord('Tortuga', 7000, 15000);
result.collectTaxes();
result.applyGrowth(5);
result.applyRecession(5);
console.log(result);