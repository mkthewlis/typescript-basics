// Union types allow for more than one type
function combine(input1: number | string, input2: number | string) {
    let result;
    // However, this might require a runtime type check like so to allow TS to know what types
    // are allowed (otherwise it just sees a union pipe | without knowing which types)
    if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 60);
console.log(combinedAges);

const combinedNames = combine('Bob', 'Cat');
console.log(combinedNames);