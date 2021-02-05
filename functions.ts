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


// Example using all of the above:
// This function takes another function as a third param, which is itself defined with an
// arrow function returning void (as it doesn't include it's own return statement)
function addAndHandle(n1: number, n2: number, callBackFunc: (num: number) => void) {
    const result = n1 + n2;
    callBackFunc(result);
}

// Using the function below doesn't cause errors as it meets the types defined above
addAndHandle(10, 20, (result) => {
    console.log(result)
});

// Example of arrow function with TS:
const printOutput: (a: number | string) => void = output => console.log(output);

printOutput(add(5, 2));


// Example of arrow function with default value (has to be last param!):
const addDefault = (a: number, b: number = 1) => a + b;

printOutput(addDefault(5)); // logs 6 in the console

// Example with rest parameters to accept unlimited amount of arguments:
const restExampleAddition = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const utilisingRestExampleAddition = restExampleAddition(5, 10, 2, 3.7);
console.log(utilisingRestExampleAddition);