/* 
? Async/Await
    - Introduced in ES8 in 2017
    - Can make any function async simply by denoting (naming) it as such

    Keywords:
        - async, denotes a function to be async
        - await, calls a process to "wait" for our results

        - Can help us reduce the need for callback functions!
        - CANNOT be used in loops!
        - ALWAYS returns a promise.
*/


// Example Structure / Syntax
// Async Function Declaration (declarative style)
async function asyncFuncName() {
    //... code to run


}

// Async Function Expression
let functionExpressionName = async function(){
    // ... code to execute


}

// Async Arrow Function
let arrowFunctionName = async () => {
    // ... code to execute

}

//..............................
// * Because async functions ALWAYS return a promise, we can use promise resolvers! (.then(), .catch())

async function getName(){
    return 'Gandalf the Grey'

}
console.log(getName()); //Promise { 'Gandalf the Grey' }
// .then(): a method that attached a callback func for the resolution of the promise.
getName().then((data) => console.log(data));
