function add(n1: number, n2: number) {
    // Vanilla JS solution where n1 is string can include if statement:
    // if (typeof n1 === 'string' && typeof n2 === 'string') {
    //     return n1 + n2;
    // } else {
    //     throw new Error('Incorrect input!');
    // }
    return n1 + n2;
}

const number1 = '5';
const number2 = 2.8;

const result = add(number1, number2);

console.log(result);