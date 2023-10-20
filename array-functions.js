/*
Map array method
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
*/

/* const numbers = [1,2,3,4,5,6,7]; */

/* const squareResult = numbers.map(square); */


function square(array) {
    return x * x;
}


// console.log(numbers);
// console.log(squareResult);

// ----------------------------------------------------------------


/*
Filter array method
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/

const numbers = [1,2,3,4,5,6,7];


function ifEven(array) {
    return array.filter( numb => numb % 2 == 0 );
}


// const evenResult = ifEven(numbers);
// console.log(evenResult);

// ----------------------------------------------------------------



/*
Some and Every
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
*/




function isEven(x) {
    return x % 2 == 0;
}


function ifEven(array) {
    return array.filter( numb => numb % 2 == 0 );
}

const evenResult = ifEven(numbers);


console.log('Is some number even ?: ' + evenResult.some(isEven));
console.log('Is every number even ?: ' + evenResult.every(isEven));

