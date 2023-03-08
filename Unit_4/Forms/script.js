// TODO Write our Global Variables
// variable to connect to the form & one to connect to the table body, something to hold all the animal data (array)
const form = document.querySelector("form");
const table = document.querySelector("tbody");



// Will make array later
let animals = [];
/* 
console.log(form); // We are able to access our various inputs based of the "name" we assigned them.
console.log(from.name);
console.log(Object.values(form)); */
console.log(form[0].placeholder); // hits the first input in the from with [] and use dot notation to look at the placeholder we set (hint: can find other values of the input)
// TODO Create an Event Listener for Form
// Event Listener: something to listen for, when heard to the thing (something for it to do/trigger)

form.addEventListener("submit", e => {
    e.preventDefault(); // stops the default refresh
    console.log("I submitted the form!");

    // Create an animal data collection from the input values 
    const animal = {
        species: form.species.value,
        name: form.name.value,
        sex: form.sex.value,
    }
    // Testing it's working: it does!
    //console.log(animal);
    // Add animal to animals array with .push
    animals.push(animal);
    //console.log(animals);

    // Two new window methods:
    form.reset(); //point to our from and clear it
    //form[0].focus(); // will target the first input with in the form, "start" when the form is "new"
    from.species.focus();

    displayTable(); // Calling the function in the event so each animal gets displayed when it's added
  });

// TODO: Display to the table body (function)
function displayTable(){
    console.log("displayTable()", animals);
    // Use a while loop (this will be heck helpful later, so remember this section)
    /* 
        While the table body has a child in the first position/ has anything in it:
            - use the method removeChild on tbody
            - .removeChild() requires details on which element to remove
                - the first child need to be removed.
    
    */
    while(table.firstChild){
        table.removeChild(table.firstChild);

    }


    // Use a .forEach loop to create the needed table elements per animal, assign values and then append to page
    // Each row: an ID (#), the name, the sex, the species
    animals.forEach((a, i) => {
        console.log("in forEach loop:", i, a)

        // Create Elements:

        let tr = document.createElement("tr"); // this will be parent element for our "td"
        let id = document.createElement("td")
        let name = document.createElement("td")
        let sex = document.createElement("td")
        let species= document.createElement("td")
       
        // Assign elements
        id.textContent = i + 1; // ++, Using the index position in array , and adding 1 to become the ID
        name.textContent = a.name;
        sex.textContent = a.sex;
        species.textContent = a.species;

        //Append Elements to Dom/Parent
        tr.appendChild(id);
        tr.appendChild(name);
        tr.appendChild(sex);
        tr.appendChild(species);
        table.appendChild(tr);




    })
}

// to test - document.getElementById("test").onClick = "foo2()";


