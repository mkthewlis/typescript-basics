# Example app: TypeScript Introduction

First introductory project based on the 'Understanding TypeScript - 2021 Edition' course on Udemy.

## Introduction to TypeScript notes:

TS errors during development, not deployment (unlike JS which shows errors in browser when compiled)

*Core types include:*
- number: 1, 5.6, -10
- string: 'Hi', "Hi", or with template literals
- boolean: true, false
- array: [1, 2, 3]
- tuple: [1, 'two'] (specifically)
- enum: enum {NEW, OLD} (create named global identifiers)
- any: * (should be avoided as much as possible)

*Additional types include:*
- union: combining two or more specific types with a pipe | divider
- literal: assigning a type to a specific string (or, when combined with union types, two or more strings)
- aliases: set a custom type to then use elsewhere
- object: when an alias is set to a specific object structure
- function: can be set with arrow notation defining params and return type
- void: when a function type doesn't include a return statement
- unknown: not defined initially, although type can be checked later (eg. with if statement)
- never: if a function always throws/ creates an infinite loop

### Notes on core types
- TS is able to infer what type a value is, eg: let x = 3 (here TS infers that x is a number)

- For objects, it infers that it is an object and infers the type of each key value pair

- However, we can also be more specific by declaring the type of everything contained within the object

- Tuples can be set by overriding TS ability to infer an array, eg. tuple = [number, string]

- Enums allow you to define a set of named constants. This makes it easier to store more about a value by saving the number in the object, plus a name for it, eg enum Example { Three = 3, Four, Five } where Example.Five later also means the number 5.

### Notes on function types

- TS can infer what a function will return based on the types of the input parameters. However, this can be overridden by adding a different type that it should return, thereby throwing an error unless the function logic handles the conversion of types itself.

- Functions that do not include a return statement are therefore 'void' types. This differs from 'undefined' function types, where they do have a return statement, but it usually just includes 'return;', thereby being undefined - this, however, is quite rare.

### Notes on TS Compiler

- Watch mode whilst developing: 'tsc *filename* --watch' (or -w)

- To compile whole project: 'tsc --init' once in project folder. This creates 'tsconfig.js' file, where thereafter it will compile all .ts files with the 'tsc' command.

#### 'tsconfig.js' file

- Here you can specify which files to include or exclude from compilation, eg excluding "node_modules" (usually done by default as it holds all dependencies)

- compilerOptions: target - lets you set which JS version to use when compiled; lib - specifies library files to be included with the assumption of defaults

- More information about custom tsconfig.json settings can be found in the official docs: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html 