// ? Object Methods

// Objects


let marvelHero = {
    // property
    fullName: "Peter Parker",
    heroName: "Spider-Man",
    age: 25,
    active: true
}

/* 
    ? Object Literals

    When our values are written within our key. "Hard Coded"
    * Structure:
        keyword objectName = {
            key: value

        }
        let ourObj = {
            firstKey: 'string'

        }

    Are dictionaries... not technically but they are in JS    

*/


let theSimpsons = {
    id: 1,
    est: 1989,
    genre: "animated",
    seasons: {
      "season one": [
        {
          episode_title: "Simpson Roasting on an Open Fire",
          aired: "1989-12-17",
        },
        {
          episode_title: "Bart the Genius",
          aired: "1990-01-01",
        },
        ["1989-12-17", "1990-01-14"],
      ],
      "season two": [
        /* .... */
      ],
      "season three": [
        /* .... */
      ],
    },
    currently_running: true,
  };

//*  Dot Notation & Square Brackets ['always put key in quotes']
console.log(theSimpsons.genre); // animated
console.log(theSimpsons["est"]); //1989

// Multi word key:
console.log(theSimpsons.seasons["season one"])
//console.log(theSimpsons.seasons.season one); // dot natation does not work for multi word keys

theSimpsons.characters = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];
console.log(theSimpsons);

theSimpsons.showRating = 5;
console.log(theSimpsons);

// How to add another character to the array
theSimpsons.characters.push("Ned")
console.log(theSimpsons.characters)

// change the aired date of episode 2 in season 1 to Jan 14th 1990

theSimpsons.seasons['season one'][1].aired = "1990-01-14";
console.log(theSimpsons.seasons['season one'][1]);

theSimpsons.seasons["season one"][2][0]
console.log(theSimpsons.seasons["season one"][2][0])

// * Object.keys(), returns a array of our keys
console.log("Keys: ", Object.keys(theSimpsons))


//* Object.values(),
console.log("Values: ", Object.values(theSimpsons))

// * Object.create(), uses an existing object to frame out a new object, we use a variable to store the base of the object creation

const futurama = Object.create(theSimpsons);
//console.log(futurama);

futurama.id = 2;
futurama.est = 1999;
console.log(futurama);

//* delete object.key
futurama.currently_running = false;

console.log("Before: ", Object.keys(futurama));

delete futurama.currently_running;
console.log("After: ", Object.keys(futurama));


