

const x = 5;
const y = 7;


/* Functions can be assigned to variables and/or passed as an argument
and returned by another function
*/

/* myFunction  */
const myFunction = x < 10 ? add: subtract; // x -> -2

// console.log(myFunction())
// console.log(myFunction())



// --------------------------------------------------------------


/* with a single function call  */
createPrinter(); // -> no output

/* syntax to return inner function */
createPrinter()(); // -> 'Printer on'


function createPrinter(){
    function printer(){
        console.log('Printer on');
    }

    return printer;
}




function add(){
    return x + y;
}

function subtract(){
    return x - y;
}

