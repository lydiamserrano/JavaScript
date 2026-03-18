// Constructor function
function Dog(name, breed, show, mySound, canTalk) {
  this.name = name;
  this.breed = breed;
  this.show = show;
  this.mySound = mySound;
  this.canTalk = canTalk;
  this.myGreeting = function () {
    let message =
      "Hello, my name is " +
      this.name +
      ". I am a " +
      this.breed +
      " from " +
      this.show +
      ". " +
      this.mySound +
      " ";
    if (this.canTalk) {
      message += " I can talk!";
    } else {
      message += " I cannot talk.";
    }
    return message;
  };
}

// Two dog objects from fictional dogs in animated television
let dog1 = new Dog(
  "Brian",
  "White Labrador Retriever",
  "Family Guy",
  "I don't bark much, I usually just make sarcastic remarks and sip my martini.",
  true,
);
let dog2 = new Dog(
  "Pluto",
  "Generic Dog",
  "Mickey Mouse Cartoons",
  "I bark, wag my tail, and show my emotions through actions.",
  false,
);

// Put dogs into an array
let dogs = [dog1, dog2];

// Function to display all dog properties using for...in loop
function renderDog(dog) {
  let output = "";

  for (let key in dog) {
    if (dog.hasOwnProperty(key) && key !== "myGreeting") {
      if (key === "mySound") {
        output += '"' + dog[key] + '"<br>';
      } else if (key === "canTalk") {
        output += "can I talk?: " + (dog[key] ? "Yes" : "No") + "<br>";
      } else {
        output += key + ": " + dog[key] + "<br>";
      }
    }
  }

  return output;
}

// Prompt user to choose a dog
let choice = prompt("Type a dog name: Brian or Pluto");
let selectedDog = null;
if (choice) {
  let normalizedChoice = choice.trim().toLowerCase();
  for (let i = 0; i < dogs.length; i++) {
    if (dogs[i].name.toLowerCase() === normalizedChoice) {
      selectedDog = dogs[i];
      break;
    }
  }
}

// Display selected dog or error message
const detailsP = document.querySelector("#details");
const greetingP = document.querySelector("#greeting");
const errorP = document.querySelector("#error");
if (selectedDog) {
  detailsP.innerHTML = renderDog(selectedDog);
  greetingP.textContent = selectedDog.myGreeting();
  errorP.textContent = "";
} else {
  errorP.textContent = "That dog is not in the list.";
}
