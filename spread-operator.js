/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Spread (& reduce) *reduce operations expanded on in reduce.js
*/

/* Using spread operator to *indirectly* update values of an object  */

const animal = {
    name: 'puppy',
    age: '2',
    breed: 'terrier'
};

/* see what happens with missing ellipses... */
/*  const updateAnimal = { animal, name: 'paws'}; */
/* console.log(updateAnimal); */

/* Now with ellipses... */
/* const updateAnimal = { ...animal, name: 'paws'}; */
/* console.log(updateAnimal); */

// ----------------------------------------------------------------------------------------


/* Allow a flexible nuber of arguments  */


function add(...numbers) {
    return numbers.reduce( (sum, x) => sum + x);
}

/*
console.log(add(1, 2));
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4));
*/

// ----------------------------------------------------------------------------------------

/* Spread with arrays */

const numbers = [1,2,3,4,5,6,7,8,9,];

const updateNumbers = [0, ...numbers, 10];

/* console.log(updateNumbers); */

/* Pass array elements as individual arguments to functions */


/*
Example of passing numbers array as argument to function
Notice array is paassed as a single argument
*/

/* console.log(numbers); */

/* Now array passed with spread */

console.log(add(...numbers)); // -> 45




