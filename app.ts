// There is the option to be specific, but better to allow TS to infer value types
// const person: {
//     name: string;
//     age: number;
// } = {

// However, it can be needed when wanting to override TS's own inferrence, eg. when setting 
// an array to specifically be a tuple. Otherwise, the following would work below the object:
// person.role.push('admin');
// person.role[1] = 10;
// To avoid this, the object can be added again to specify what type role should be:

const person: {
    name: string;
    age: number;
    hobbies: string[];
    // This sets role to be a tuple with exactly two elements of these types:
    role: [number, string];
} = {
    name: 'Bob',
    age: 28,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'Author']
};


// Use any[] to let the content of the array be anything
let favouriteActivities: string[];
favouriteActivities = ['Sports'];
// This leads to error as it is not an array:
// favouriteActivities = 'Sports';
// This leads to an error as it includes a number:
// favouriteActivies = ['Sports, 1];

// person.nickname would not work as the key doesn't exist
console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // However, this would fail as map only works on number arrays:
    // console.log(hobby.map(...));
}