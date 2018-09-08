var faker = require('faker');

function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}

function percentageChange(valOne, valTwo){
    return(((valTwo - valOne)/valOne)*100);
}

function stocksPurchased(startingVal, weekAverage){
        //AVERAGE PRICE
    if (percentageChange(startingVal, weekAverage) < 4 && percentageChange(startingVal, weekAverage) > -4){
        return Math.floor(getRandomValue(850, getRandomValue(1250, 2300)))
        //HIGH PRICE
    } else if(percentageChange(startingVal, weekAverage) > 4){
        return Math.floor(getRandomValue(70, getRandomValue(150, 450)))
        //LOW PRICE
    } else if(percentageChange(startingVal, weekAverage) < -4){
        return Math.floor(getRandomValue(500, getRandomValue(750, 1300)))
    }
}

var weeklyValues = [];
var totalStocksPurchased = 0;
var weekValues = function(startingVal, index) {

    var minusSomePercent = startingVal - (startingVal * getRandomValue(.03, .38));
    var plusSomePercent = startingVal + (startingVal * getRandomValue(.03, .52));

    var weekHigh = parseFloat(getRandomValue(startingVal, plusSomePercent).toFixed(2));
    var weekLow = parseFloat(getRandomValue(minusSomePercent, startingVal).toFixed(2));
    var weekAverage = parseFloat(((weekLow + weekHigh) / 2).toFixed(2));
    var weekStocksPurchased = stocksPurchased(startingVal, weekAverage);

    var weekObj = {
        weekIndex: index,
        weekHigh,
        weekLow,
        weekAverage,
        weekStocksPurchased
    }

    weeklyValues.push(weekObj.weekAverage);
    totalStocksPurchased += weekStocksPurchased;
    return weekObj;
}



var xWeeks = function(numOfWeeks, avgCompanyValue) {
    var results = [];
    for (var i = 0; i < numOfWeeks; i++ ) {
        oneWeek = weekValues(avgCompanyValue, i+1);
        results.push(oneWeek);
        // results.push(JSON.stringify(oneWeek));
    }
    return results;
}

var testCompany = function(x) {
    var results = [];

    for (var i = 0; i < x; i++ ) {
        var companyName = faker.company.companyName();
        var startingVal = getRandomValue(9, getRandomValue(70, 780));
        var companyObj = {
            company: companyName,
            weeks: xWeeks(52, startingVal), 
            yearly: {
                stocksPurchasedYear: totalStocksPurchased,
                yearHighest: Math.max.apply(null, weeklyValues),
                yearLowest: Math.min.apply(null, weeklyValues),
                yearAverage: parseFloat(((Math.max.apply(null, weeklyValues) + Math.min.apply(null, weeklyValues)) / 2).toFixed(2))    
            }
            
        }
        results.push(companyObj); //
        // results.push(JSON.stringify(companyObj)); //
        weeklyValues = []
        totalStocksPurchased = 0
    }

    return results;
}

// var output = (testCompany(99));
var output = JSON.stringify(testCompany(99));

console.log(output)