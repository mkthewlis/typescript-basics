# Example app: TypeScript Introduction

First project based on the 'Understanding TypeScript - 2021 Edition' course on Udemy.

## Introduction to TypeScript notes:

TS errors during development, not deployment (unlike JS which shows errors in browser when compiled)


### Type inference
- TS is able to infer what type a value is, eg:let x = 3 (here TS infers that x is a number)

- For objects, it infers that it is an object and infers the type of each key value pair

- However, we can also be more specific by declaring the type of everything contained within the object