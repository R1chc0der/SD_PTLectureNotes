/* 
? Array Destructuring 

    - Allow us to unpack values from array into distinct variables.
    - Similar syntax to array literals, but the square brackets [] are on the left side of the assignment operator (=)
    - Great way to pull info from the array and assign to ti's own variable
*/

// W/O Destructuring

/* const fullName = ["John, Smith"];
const firstName = fullName[0];
const lastName = fullName[1];
console.log(firstName, lastName); */

let []
//------------------
/* 
 ? Spread Operator
 
    - The spread operator basically pulls out the elements of an array as a standalone list of elements.
    Denoted by three consecutive periods: ..Array

*/

const myName = ["John", "Smith"];

const copiedName = [...myName]; // The Spread Operator inserts the elements from fullName
console.log("Copied w/ spread operator: ", copiedName); // Copied w/ spread operator: ["John", "Smith"]

const anotherCopy = [myName]; // This inserts the array as a whole 
console.log("Copied w/o spread operator:", anotherCopy); // Copied w/o spread operator: [ ["John" "Smith"]]
console.log(another[0][0]);


// an example with numbers:
/* 
let numberArray = [];

for (i=0; i <= 20; i++){
    numberArray.push(i);

}
console.log(numberArray)

const newNumberArray = [...numberArray]
console.log(newNumberArray);
 */

myName.unshift("Miss");
console.log("My Name: ", myName);
console.log("Copied Name: ", copiedName);

// Math.min, Returns the smaller of a set of supplied numeric expressions.

console.log(Math.min(1,5, 13, -3));

const prices = [10.99, 5.99, 20, 3.99];
console.log(Math.min(prices)); // NaN, can't perform Math.min on array, array != number
console.log(Math.min(...prices));// 3.99, spread operator was about to unpack the numerical values from the array to process with Math.min 

// * Ex changing the original and copied array

const persons = [
    {
      name: "Jane",
      age: 28,
    },
    {
      name: "John",
      age: 35,
    },
  ];

  // Old way of copying persons:
/*   const copiedPersons = persons.map((person) => ({
       name: person.name,
       age: person.age 

  })) */

  // Using Spread operator
  const copiedPersons = [...persons];

  // Test using push on persons array, does copiedPersons change
persons.push({name: "Anna", age: 29});

console.log("Persons Array: ", persons); // Includes anna object in array

console.log("Copied Persons Array: ", copiedPersons); // Copy does not include anna, created before anna was added

// * Variables within Memory
// * First assignment/original assignment
let x = 10;
let y = "abc";
let z = null;

// Reassign to another variable
let a = x;
console.log(a);
let b = y;      // 10
console.log(b); //abc

// Reassign a and b 
a = 5;
b = "def";

console.log(x, y, a, b); // 10, abc, 5, def

// -------------

let arr = [];
arr.push(1);
console.log(`arr: ${arr}`);

let reference = [1];
let refCopy = reference;
console.log(`refCopy: ${refCopy}`);

reference.push(2);  // both reference and refCopy will have the 2 added
console.log(reference, refCopy); // [1, 2] [1, 2]

// Look up what the heck is happening
refCopy.push(3);
console.log(reference, refCopy);

// --------------------------------------
// ? Rest Syntax

/* 
  - Looks exactly like spread syntax: ...
  - Spread -> "expands" an array
  - Rest   -> "condenses" an array"

  We can use the spread operator syntax, referred to as 'rest' syntax when working with array destructuring, to package up the REST of the values in the referenced array, and return them as their own array.


*/

const fullNameAgain = [
  "Jane",
  "Doe",
  "Mrs.",
  {
    month: 03,
    date: 22,
    year: 1973,
  },
  2,
  "test",
  "4",
  true,
  false,
];

let janesName = fullNameAgain[0];
//console.log(janesName); // jane

//Using both array destructuring and rest:
let [newFirstName, newLastName, , ...otherInfo] = fullNameAgain;
console.log(`newFirstName: ${newFirstName}`); // Jane
console.log(`newFirstName: ${newLastName}`); // Doe
console.log(`newFirstName: ${otherInfo}`); // [object Object],2, test, 4, true, false
console.log(otherInfo); // [{ month: 3, date: 22, year 1973 }, 2, "test", "4", true, false]



