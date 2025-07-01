// if statement example:
let age = 20;
if (age >= 18) {
  console.log('You are an adult.');
}

// if-else statement example:
if (age < 18) {
  console.log('You are a minor.');
} else {
  console.log('You are an adult.');
}

// switch statement example:
let fruit = 'apple';
switch (fruit) {
  case 'banana':
    console.log('Banana is yellow.');
    break;
  case 'apple':
    console.log('Apple is red.');
    break;
  case 'grape':
    console.log('Grape is purple.');
    break;
  default:
    console.log('Unknown fruit.');
}

// loop, for example
for (let i = 0; i < 5; i++) {
  console.log('Iteration:', i);
}

// loop, foreach example
let fruits = ['banana', 'apple', 'grape'];
fruits.forEach(function (fruit) {
  console.log('Fruit:', fruit);
});

// while loop example
let i = 0;
while (i < 5) {
  console.log('Iteration:', i);
  i++;
}

// do-while loop example
let j = 0;
do {
  console.log('Iteration:', j);
  j++;
} while (j < 5);

// break statement example
for (let k = 0; k < 5; k++) {
  if (k === 2) {
    break;
  }
  console.log('Iteration:', k);
}

function greet() {
  console.log('Hello, World!');
}
greet();

// function example
function greet(name) {
  console.log('Hello, ' + name + '!');
}

// Call the function
greet('Alice');
greet('Bob');

let a = 25;
a = 30; // Reassignable

const birthYear = 1990;
birthYear = 1995; // Error

function square(x) {
  return x * x;
}
console.log(square(4)); // 16

// scope
let name = 'John'; // Global scope
function greet() {
  console.log(name);
}
greet(); // John

// Local scope
function test() {
  let num = 10; // Local scope
  console.log(num); // Accessible here
}
test();
console.log(num); // Error: num is not defined

// Function Scope
function multiply(x, y) {
  return x * y;
}

// Object example:
let person = {
  name: 'Alice',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Wonderland',
  },
  hobbies: ['reading', 'traveling'],
  alive: true,
  greet: function () {
    console.log('Hello, ' + this.name);
  },
};

person.greet(); // Hello, Alice
console.log(person.name); // Dot notation
console.log(person['age']); // Bracket notation

person.age = 31; // Modifying an existing property
person.address.city = 'New York'; // Modifying a nested property
person.hobbies.push('cooking'); // Adding a new hobby

// Working with arrays
let numbers = [1, 2, 3, 4];
const fruits = ['banana', 'apple', 'grape'];
let mixed = [1, 'banana', true];
let empty = [];
// Access array elements using index positions (starting from 0).
console.log(numbers[0]); // 1
console.log(fruits[1]); // apple
console.log(mixed[2]); // true

// You can add elements using push() and remove elements using pop().
numbers.push(5); // Add 5 to the end
fruits.pop(); // Remove the last element (grape)
mixed.push('orange'); // Add 'orange' to the end
empty.push(1); // Add 1 to the empty array

// shift() and unshift() add or remove elements from the beginning of an array.
fruits.shift(); // Remove the first element (banana)
mixed.unshift('kiwi'); // Add 'kiwi' to the beginning

// You can use loops like for, forEach(), or map() to iterate over array elements.
// for loop example
for (let i = 0; i < numbers.length; i++) {
  console.log('Number:', numbers[i]);
}

// forEach() example
fruits.forEach(function (fruit) {
  console.log('Fruit:', fruit);
});

// try-catch example
try {
  let result = riskyFunction();
} catch (error) {
  console.log('Error: ' + error.message);
}

try {
  let result = riskyFunction();
} catch (error) {
  console.log('Error: ' + error.message);
} finally {
  console.log('Always runs');
}

function validateAge(age) {
  if (age < 18) {
    throw new Error('Age must be 18 or older.');
  }
}

// usage:
try {
  validateAge(16);
} catch (error) {
  console.log('Error: ' + error.message);
}

// Callback
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: 'John Doe' };
    callback(data);
  }, 1000);
}

fetchData(function (user) {
  console.log('User fetched:', user);
});

// Promise
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { id: 1, name: 'John Doe' };
      resolve(data);
    }, 1000);
  });
}

fetchData().then((user) => {
  console.log('User fetched:', user);
});

// Async / Await

async function fetchData() {
  let result = await fetch('https://api.example.com/data');
  let data = await result.json();
  console.log(data);
}
fetchData();
// Async / Await with error handling
async function fetchData() {
  try {
    let result = await fetch('https://api.example.com/data');
    if (!result.ok) {
      throw new Error('Network response was not ok');
    }
    let data = await result.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
