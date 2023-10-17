/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
Map array method
*/

let numbers = [1,2,3,4,5,6,7];
let squareResult = numbers.map(square);

function square(x) {
    return x * x;
}

/* console.log(numbers);
console.log(squareResult); */

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Filter array method
*/

function ifEven(array) {
    return array.filter( numb => numb % 2 == 0 );
}

const evenResult = ifEven(numbers);
console.log(evenResult);