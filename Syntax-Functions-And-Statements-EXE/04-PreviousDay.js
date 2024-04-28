function previousDay(year, month, day) {
    let dateZone = new Date(year, month - 1, day);
    dateZone.setDate(dateZone.getDate() - 1);

    let yy = dateZone.getFullYear();
    let mm = dateZone.getMonth() + 1;
    let dd = dateZone.getDate();

    console.log(`${yy}-${mm}-${dd}`);
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);