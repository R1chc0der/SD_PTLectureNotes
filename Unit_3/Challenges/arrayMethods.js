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