/* 
    ? Unit 2: Data Structures
    - How we organize our data.
    - Utilize arrays and objects and use functions to interact with them.
    
    ? Array
    - Denoted with square brackets []
    - Indices start at zero
        *
*/
// 
let list = ["milk", "bread", "chicken", "butter"];

/* console.log(list[2]); // chicken

console.log(list.length); // 4, number of items in array (1 higher than highest index)

console.log(list[list.length]); // list[4], undefined

// In need to find highest indices, subtract 1 from the length
console.log(list[list.length -1]); // butter */

list[0] = "chocy milk"; // reassign array values

console.log(list); // [index 0 will be changed]

//Example 2
//                0     1   2       3         4      5 nested array         6  
let avengers = ["Nick", 5, true, "Steve", "Bruce", ["Tony", true, 100], "Natasha" ];

//console.log(typeof avengers); // object

// instanceof to check if true or false value.
console.log(avengers instanceof Array); // true

console.log(avengers[5]); // ['Tony', true, 100]
console.log(avengers [5][0]); // Tony
console.log(avengers [5] [2]); // 100


/* 
    Try building out and console.logging its values later!
*/

