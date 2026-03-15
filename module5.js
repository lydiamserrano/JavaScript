let myDog = {
  // Step 1: Create literal object named myDog
  name: "Brian",
  breed: "white labrador retriever",
  show: "Family Guy",
  mySound:
    "I don't bark much, I usually just make sarcastic remarks and sip my martini.",
};

document.write(
  // Step 2: Display the literal object properties
  "Hello, my name is " +
    myDog.name +
    ". I am a " +
    myDog.breed +
    ". I'm the family dog on the adult cartoon " +
    myDog.show +
    ". " +
    myDog.mySound,
  "<br><br>",
);

function Dog(name, breed, show, mySound, canTalk) {
  // Step 3: Create a constructor for another dog object
  this.name = name;
  this.breed = breed;
  this.show = show;
  this.mySound = mySound;
  this.canTalk = canTalk;

  this.myGreeting = function () {
    // Step 4: Add a method to display the dog's greeting
    document.write(
      "Hello, my name is " +
        this.name +
        ". <br>" +
        "I am a " +
        this.breed +
        ". <br>" +
        "I'm the family dog on the adult cartoon " +
        this.show +
        ". <br>" +
        this.mySound +
        "<br>" +
        "Can I talk? " +
        this.canTalk +
        "<br><br>",
    );
  };
}

let myDogConst = new Dog( // Step 5: Create the object named myDogConst using the constructor
  "Brian",
  "white labrador retriever",
  "Family Guy",
  "I don't bark much, I usually just make sarcastic remarks and sip my martini.",
  true,
);

myDogConst.myGreeting(); // Step 6: Call the method to display the dog's greeting
