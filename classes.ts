// Example of building and using a class with TS
// NB: compatability with JS varies depending on its version (defined in tsconfig.json file)
class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
    describe() {
        // describe(this: Department) hints to TS that 'this' refers to an instance inside the class
        console.log('Department ' + this.name)
    }
}

const accounting = new Department('Accounting');

console.log(accounting); // Console logs: Department {name: "Accounding"}

accounting.describe(); // Console logs: Department: Accounting

// Following leads to undefined as 'accountingCopy' doesn't have a name property
const accountingCopy = { describe: accounting.describe };
accountingCopy.describe(); // Console logs: Department: undefined
// NB: adding a 'name' property to accountingCopy would solve this issue