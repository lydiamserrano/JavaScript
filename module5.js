let myDog = {
  name: "Brian",
  breed: "white labrador retriever",
  show: "Family Guy",
  mySound:
    "I don't bark much, I usually just make sarcastic remarks and sip my martini.",
};

document.write(
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

function myDogConst(name, breed, show, mySound, canTalk) {
  this.name = name;
  this.breed = breed;
  this.show = show;
  this.mySound = mySound;
  this.canTalk = canTalk;

  this.myGreeting = function () {
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

let brian = new myDogConst(
  "Brian",
  "white labrador retriever",
  "Family Guy",
  "I don't bark much, I usually just make sarcastic remarks and sip my martini.",
  true,
);

brian.myGreeting();
