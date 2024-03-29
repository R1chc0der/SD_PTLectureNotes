//* Object Oriented Programming
/* 
    - Encapsulated data and behavior through an exposed interface
        (we can access how we build and store data/dataType values)
    - Allows for inheritance of behavior(methods/functionality) via parent class that can share methods.
    - Abstraction of complexity (takes something complex and allows us to work with it)
    - Polymorphism of behavior (can act/do many things in it's many forms)
*/

//*   
// Allows us to have a set of data within an object stored as a property.

class Pet {
    constructor(name, color) {
      this.name = name;
      this.coloration = color;
    }
  
    speak() {
      return `${this.name} says, "${this.voice}!"`;
    }
  }
  
  let buttons = new Pet("Buttons", "tri-color");
  // console.log(buttons);
  let tiny = new Pet("Tiny", "fawn brown");
  // console.log(tiny);
  // console.log(tiny.speak());
  // console.log(buttons.speak());
  
  //console.log(`${tiny.name} goes woof!`); // Not as flexible and clean code compared to the method
  
  // ----------------------------------------------
  
  //* Inheritance
  // We can create child classes that can inherit from a parent class.
  
  // Ex 1: Change up our Pet class and create a new child class called Dog that extends from it
  /* 
      New Keywords: extends, super
      - extends denotes that our Dog class is a child of Pet class
      - super sets which properties we are inheriting from the parent class. We can also add additional properties unique to the child class (in this ex, voice).
  */
  class Dog extends Pet {
    // constructor needs parameters for super and unique properties
    constructor(name, color, voice) {
      // super defines and passes values to properties from/inherited from parent
      super(name, color);
      this.voice = voice;
    }
  
    //   speak() {
    //     return `${this.name} says, "${this.voice}!"`;
    //   }
  }
  
  let daisy = new Dog("Daisy", "Tan and White", "Scream");
  console.log(daisy);
  console.log(daisy.speak());
  
  // Ex 2: Create a child class of Cat from Pet class
  class Cat extends Pet {
    constructor(name, color, voice) {
      super(name, color);
      this.voice = voice;
    }
  }
  
  let bowser = new Cat("Bowser", "Grey", "Meow");
  console.log(bowser);
  // console.log(bowser.speak()); // TypeError: bowser.speak is not a function
  console.log(bowser.speak()); // Works after adding speak to parent class object
  
  // --------------------------------------
  //* Abstraction
  // A way to store some of the complex logic that we may associate with our object methods
  // Hiding the complexity of how things work via an objects methods
  
  // Ex: Create a base class that has a method to help up calculate a tip amount with a given tab that has been created.
  class Tab {
    constructor(sub, tax) {
      this.subtotal = sub;
      this.tax = tax;
      this.tip;
    }
  
    // Using a method to perform functionality, aka abstraction
    tipAmount(x) {
      // create a total of the subtotal and tax
      let total = this.subtotal + this.tax;
  
      // calculate tip and give value
      this.tip = total * x;
      // calculate the final total for the bill
      let finalAmount = total + this.tip;
      // return final amount
      return finalAmount.toFixed(2);
    }
  }
  
  // Set up some variable to hold some information: sales tax, a tip percentage, and a generated a new bill/Tab object
  let salesTax = 0.06;
  let tipPercent = 0.2;
  
  let dinnerBill = new Tab(54.8, salesTax);
  console.log(dinnerBill);
  
  // Create a function that takes in a bill and processes it using the method held within the object itself
  function calcTip(bill) {
    return bill.tipAmount(tipPercent);
  }
  
  // console.log and see the magic happen
  console.log(`Final Cost: $${calcTip(dinnerBill)}`);
  console.log(`With a tip of: $${dinnerBill.tip.toFixed(2)}`);
  
  // ----------------------------------------------
  //* Polymorphism
  /* 
      - How objects respond in relationship from child to parent.
      - All children/siblings can use the methods of the parent.
      - Children/siblings can't access properties of other children/siblings (including methods)
  */
  Footer
  © 2023 GitHub, Inc.
  Footer navigation
  
      Terms
      Privacy
      Security
      Status
      Docs
      Contact GitHub
      Pricing
      API
      Training
      Blog
      About
  
  