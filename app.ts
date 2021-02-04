function add(n1: number, n2: number) {
    return n1 + n2;
}

// Here the return type is by default 'void' as it doesn't have a return statement
// function printResult(num: number): void {
function printResult(num: number) {
    console.log('Result ' + num);
}

printResult(add(5, 12));

// We can make clear that a variable must always be a function:
// let combineValues: Function;
// combineValues = 5; this therefore won't work
// HOWEVER, this would work as it is technically a function: 
// combineValues = printResult; 

// To avoid this, we can use arrow function notation with specific types added
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));


// This is a valid TS type too, although 'undefined' type is mostly used when you want 
// the function to specifically produce undefined
let someValue = undefined;