function yearDays(year){
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) ||year % 400 === 0 
    return isLeapYear? `${year} has 366 days` : `${year} has 365 days`
}