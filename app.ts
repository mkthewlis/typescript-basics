function add(n1: number, n2: number, showResult: boolean, phrase: string ) {
    // Vanilla JS solution where n1 is string can include if statement:
    // if (typeof n1 === 'string' && typeof n2 === 'string') {
    //     return n1 + n2;
    // } else {
    //     throw new Error('Incorrect input!');
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

const number1 = 5; // same as 5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);
