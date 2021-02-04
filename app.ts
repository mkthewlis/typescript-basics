// 'Unknown' is better than any as it can be checked further on, unlike any which always
// will accept any type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Bob';

// userName = userInput;
// This will cause an error as 'unknown' cannot be assigned to another type (unlike 'any') 
// Using a 'typeof' check can overcome this, as so:
if (typeof userInput === 'string') {
    userName = userInput;
}

// This function will always throw an error as it never returns anything, so it could include type:
// function generateError(message: string, code: number): never {
function generateError(message: string, code: number) {
    throw {message: message, errorCode: code};
}

generateError('An error occured!', 500);

// Infinite loops are also of type 'never', eg this function body:
// while (true) {};