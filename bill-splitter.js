const prompt = require('prompt-sync')();

let bill = Number (prompt("Enter how much the bill was:  $"));

let person1 = Number (prompt("Enter how much person 1 paid:  $"));

let person2 = Number (prompt("Enter how much person 2 paid:  $"));

let evensplit = bill / 2

if (evensplit === person1 && evensplit && person2){
    console.log ("Congratulations, you both split the bill evenly.")
}else if (person1 > evensplit) {
    let owe = person1 - evensplit;
    console.log("Person 2 owes Person 1: " + owe + "$" )
} else{
    let owe = person2 - evensplit;
    console.log("Person 1 owes Person 2: " + owe + "$")
}