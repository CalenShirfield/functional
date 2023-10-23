/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Reduce
*/

const numbers = [1,2,3,4,5];

const words = ['hi', 'my', 'name', 'is',]



console.log(numbers.reduce(add));

console.log(numbers.reduce(mult));

console.log(words.reduce(joinStringWithSpaces));

/*Reducer callback functions with accumulator and current value arguements */
function add(sum, x){
    return sum + x;
}


function mult(product, x){
    return product * x;
}

/* Similar action to above integer reducer */
function joinStringWithSpaces(sentence , nextWord){
    return sentence + ' ' + nextWord

}