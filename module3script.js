const output = document.getElementById("output");

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    output.innerHTML += "Number " + i + " is even.<br>";
  } else {
    output.innerHTML += "Number " +  i + " is odd.<br>";
  }
}
  
  let myNum = +window.prompt("Enter a number between 5 and 20:", "");

if (!Number.isNaN(myNum) && myNum >= 5 && myNum <= 20) {

    output.innerHTML += `<br>Counting up to ${myNum}:<br>`;

    let counter = 1;

    do {
        output.innerHTML += counter + "<br>";
        counter++;
    } while (counter <= myNum);

} else {
    output.innerHTML += "Invalid number. Please refresh and try again.<br>";
}

const subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

output.innerHTML += "<br><strong>All Subjects:</strong><br>";

subjects.forEach(function(subject) {
    output.innerHTML += " - " + subject + "<br>";
});

output.innerHTML += "<br><strong>Subjects:</strong><br>";
output.innerHTML += subjects.join(", ");
