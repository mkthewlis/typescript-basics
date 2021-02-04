// Type aliases allow us to create a desired combination of types to not have to repeat
// the type several times.
// Here it is used with union types, seperated by a pipe |
type Combinable = number | string;

// Literal type has to include specific string, here combined with union type
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
        input1: Combinable, 
        input2: Combinable, 
        resultConversion: ConversionDescriptor) {
    let result;
    // However, this might require a runtime type check like so to allow TS to know what types
    // are allowed (otherwise it just sees a union pipe | without knowing which types)
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    if (resultConversion === 'as-number') {
        return parseFloat(result) // +result;
    } else {
        result.toString();
    }
    return result;
}

const combinedAges = combine(30, 60, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '60', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Bob', 'Cat', 'as-text');
console.log(combinedNames);