/*
Three specifically defined functions
A bonus for readability but too much repetition
*/

function twentyPercentOff(price){
    return price * 0.8;
}

function thirtyPercentOff(price){
    return price * 0.7;
}


function fifteenPercentOff(price){
    return price * 0.85;
}


/*
Higher order function allows for code simplification,
readability, testimg and cuts down on the repitition.
 */

function createSalesCalculator(percentOff){
    function saleCalculator(price){
        return price * ((100 - percentOff) / 100)
    }
    return saleCalculator;
}

twentyPercentOff = createSalesCalculator(20);
thirtyPercentOff = createSalesCalculator(30);
fiftyPercentOff = createSalesCalculator(50);

console.log(twentyPercentOff(100));
console.log(thirtyPercentOff(100));
console.log(fiftyPercentOff(100));
