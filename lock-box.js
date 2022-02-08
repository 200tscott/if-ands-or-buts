const pinCode = '3626'
const prompt = require('prompt-sync')();

let num = Number(prompt("enter the four digit lockbox combination: "))
if(num === 3626){
    console.log("You have succesfully entered the Lockbox! ")
}else {
    console.log("Failure")
}