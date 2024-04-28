function daysInAMonth(day, year) {
    let days = new Date(year, day, 0).getDate();
    console.log(days);
}

daysInAMonth(1, 2012);
daysInAMonth(2, 2021);