/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Spread & reduce
*/


const animal = {
    name: 'puppy',
    age: '2',
    breed: 'terrier'
};

/* missing ellipses... */
// const updateAnimal = { animal, name: 'paws'};


/*
const updateAnimal = { ...animal, name: 'paws'};

console.log(updateAnimal);
 */

// ----------------------------------------------------------------------------------------


const s = [1,2];



function add(x,...numbers) {
    return numbers.reduce( (sum, x) => sum + x);
}



console.log(add(1,s));
