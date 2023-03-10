/* 
? Promises
    Is an object that may produce a singular value in the future.
    A promise allows us to "wait" for our results (regardless if we get a positive response or negative rejection)

    3 States:
        - Pending,... in the process of getting the result
        - Fulfilled,... yay we successfully got the result
        - Rejected,...boo we were not able to get the result

    - Always returns an object {}
    
    - Promises take in two parameters
        - Resolved
        - Reject

    https://www.w3schools.com/js/js_promise.asp
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
*/

// Mock/Faux Internet send
//
/* function getData(){
    setTimeout(() =>{
        return "Here's some faux data!"

    }, 3000);


}
let data = getData();// The values comes "late" by 3 secs
console.log(data); // We get an undefined because the information is delayed when it/the code is compiled.
 */

// Use Callback - callbacks functions get executed after the end of a process
function getData(cb){
    setTimeout(() => {
        cb("some data to hopefully be delivered")
    }, 3000);

}

/* getData((data) => console.log(data));

console.log("Wow that compiler runs fast!"); */


/* 
    How we can make our program wait for data instead of giving us undefined results:

    * A promise is an object that may produce a singular value in the future.
    - Resolved: If we obtain our data, we can resolved and use it.
    - Rejected: If we get nothing or an error, we can handle it with reject.
 
*/

function returnData() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(true){
                resolve("Some data from resolved Promise!")
            } else {
                reject("This is a rejection, promise failed.")
            }
        })

    })
}

//console.log(returnData()) // Promise { <pending> }


/* 
    ? Resolvers
        - When returned, the returnData() func. will return/give a Promise instead of a given string.
        - Chaining with a resolver 
            - Keywords:
                - .then()
                -   if success "then" do this
                    can be chained together, do multiple things
                - .catch()
                    if error/rejection     
            - Take in a callback function (think arrow)
            - * only put the semicolon(;) AFTER the LAST resolver
            ex: promiseResults.then().then().then().catch();

*/

returnData()
    .then(data => console.log("From resolved response:", data))
    // chaining .then()s for testing
    .then(() =>{
        let x = 10;
        let y = 10;
        console.log(x*y);
    })
    .catch(function(err){ // change the conditional to false.
        console.error(err);

    });


/* 
    ? The Process
        - Create a new Promise
            - resolve / reject parameters of a callback function
        - setTimeout is action as a "waiting" process for a resource/data
        - resolve() or reject() said Promise
        - After that when returned we got a promise not a string
        - Needed to use resolvers (.then()/ .catch()) with callbacks to extrapolate(get) the info form that promise.    
 */