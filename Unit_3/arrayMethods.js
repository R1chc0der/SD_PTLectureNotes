// ? Array Methods, awesome ways to do things with or to arrays

let food = ["apples", "mango", "grapes", "blue berries"];

for(item of food){
    console.log(item);
}



//* .push(), adds items(s) to the end of an array
food.push("Pizza");
console.log("Push method: ", food);
console.log(food[4]); // Pizza


//* .splice() 
food.splice(1, 1, "Tacos");
console.log("Splice method: ", food); 

//* .splice()
food.splice(1, 0, "Steak");
console.log("Second Splice Method: ", food); 


// * .pop(), remove value from end of array
food.pop();
console.log("Pop Method ", food)

// * .shift(), removes the first value of an array(value in first position)
food.shift();
console.log("Shift Method ", food)

// * .unshift(), add to the front of an array, can include multiple items

foods.unshift("cake", "sushi", "roti");
console.log("Unshift method: ", food);

// .length, property not method 
console.log(food.length);


// * .toString(), returns a string representation of the array

let rbg = ["red", "green", "blue"];
console.log("ToString Method ", rbg.toString());



// ! Iteration Methods

/* 

    ? .filter() & .includes()
    - does not destroy the original array
    - we typically store the filter array in a new variable
    - takes a callback function that returns either true or false
        - A callback function is another function that we invoke within our main function(nested function)
    - loops through array 
    - MUST have a return
*/

let fruits = ["Kumquat", "Banana", "Peach", "kiwi", "Papaya"];

// Use filter to remove peach

/* let filteredFruit = fruits.filter(fruit =>  {
    let remainingFruit = fruit !== "Peach"; 
    console.log(`Remaining fruit: ${remainingFruit}`);
    return remainingFruit;
    
});

console.log(filteredFruit);
 */

// .includes(), remove any fruit with "P"
console.log("Includes Method: ", fruits.includes("P"));

// .filter with .includes, remove any fruit with "P"

const filterFruit2 = fruits.filter((item) => !item.includes(p));
console.log(filterFruit2);

// set the filtered array to variable, filter will run eatMango function per item in array
const filteredFruitFunctionEx = fruits.filter(eatMango);

// returns true if not mango, false if mango
function eatMango(fruit) {
    return fruit !== "Mango";


}
// printing to see final filtered array
console.log("Filter with function ex: ", filteredFruitFunctionEx);



//--------------------------------------------------------

//? .forEach()

/* 
    Runs 3 arguments:
        - The value
        - The Index
        - The array object itself

    - forEach() helps us iterate over an array performing a function once per element in the array via a callback function.
    - Is not executed for empty elements
    - Does not change the original array      

*/


let newFoodList = ["apple", "pear", "mushrooms", "cheese", "banana"];

/* for (let i = 0; i < newFoodList.length; i++){
    
    console.log(newFoodList[i]);
    

} */

//newFoodList.forEach((item) => console.log("ForEach Method: ", item));


newFoodList.forEach((item, i) =  {
    console.log("ForEach with Index: ", item, i)
})


// function declaration
newFoodList.forEach(function (item){
    console.log("Declaration sample: ", item);

})


//build a function to console.log item

function displayFoodItem(foodThing){
    console.log(`Function outside of forEach: ${foodThing}.`);


}

// Pass our forEach the function
newFoodList.forEach(displayFoodItem);

//-----------------------------------------
//? .map()
/* 
    - Creates a new array from calling a function for every array element
    - Call the function once per element in an array
    - Does not execute the function for empty elements
    - Does not change the original array
*/

// Populated by for loop

let numArray = [];

// Populate by using .map on numArray
let fizzBuzzArray = [];

for (let n = 0; n <= 25; n++ ){
    numArray.push(n);


}
console.log(numArray);

// Checking if numArray was populated
// console.log(numArray);

//Simple ex first

numArray.map((x) => fizzBuzzArray.push(x));



/////
numArray.map((x) => {
    // Use a conditional to check division
    if (x % 15 === 0) {
      fizzBuzzArray.push(x);
    } else if (x % 3 === 0) {
      fizzBuzzArray.push("Fizz");
    } else if (x % 5 === 0) {
      fizzBuzzArray.push("Buzz");
    }
  });

////
console.log(fizzBuzzArray);


//? --- map vs forEach example -----

let mainArr = [1,2,3,4];

// .forEach does NOT return anything, performs an action on each item, does not return a value
let forEachEx = mainArr.forEach((i) => i);
console.log(forEachEx);

// .map returns a new array, perform action and creates/returns new value
let mapEx = mainArr.map((i) => i);
console.log("mapEx: ", mapEx);


//-------------------------------------------
//? .find()
/* 
  - Executes a function for each array element and returns the value of the first element that passes a test.
  - Returns undefined if no elements are found.
  - Does not execute the function for empty elements.
  - Does not change the original array.
*/

let tmnt = ["Mikey", "Donnie", "Leo", "Raph", "Splinter", "Shredder", "Baxter"];

let character = "leo";
console.log(
    "Find Ex: 1",
    tmnt.find((c) => c === character)
);

character = "April";
console.log(
    "Find Ex: 2",
    tmnt.find((c) => c === character)
);

character = "Splinter"; // find will return true for splinter versus the value splinter because we check all items via including the index.
console.log(
    "Find Ex 2: ",
    tmnt.find((c, i) => console.log(
      "Character: ",
      c === character,
      "Index: ",
      i
    ))
  );