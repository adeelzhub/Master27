// **********************************
// Code Nation - wearecodenation.com
// Week 1 - If else & Switch
// **********************************

//
// Example 1 - If else statements
//


//
// Example 2
//

// Strict


// Not equal


//
// Example 3
//


//
// Example 4
//


//
// Example 5 - From if else to switch
//

// When using if else

// When using Switch


//
// Example 6
//

// let age = 15;
// if(age > 17){
//     console.log("Yes I can serve you");
// }else{
//     console.log("You aren’t old enough")
// }

let age = 18;
let country = "UK"
if(age > 17 && country == "UK"){
    console.log("Yes I can serve you");
}else{
    console.log("You aren’t old enough")
}


// let firstName = "Naveed"

// switch(firstName){
//     case "Ali":
//     console.log(`${firstName} is 20 years old`);
//     break
//     case "James":
//     console.log(`${firstName} is 23 years old`);
//     break
//     case "Ralph":
//     console.log(`${firstName} is 21 years old`);
//     break
//     case "Naveed":
//     console.log(`${firstName} is 32 years old`);
//     break
//     default:
//     console.log(`No such person in the database`)
//     break;
// }


// if(firstName === "Ali"){
//     console.log(`${firstName} is 20 years old`)
// }else if(firstName === "James"){
//     console.log(`${firstName} is 23 years old`)
// }else if(firstName === "Ralph"){
//     console.log(`${firstName} is 21 years old`)
// }else if(firstName === "Naveed"){
//     console.log(`${firstName} is 32 years old`)
// }else{
//     console.log(`No such person in the database`)
// }

// if(1 === "1") {
//     console.log(true);
// }
// else {
//     console.log(false);

// }


// if(1 !== "1") {
//     console.log(true);
// }
// else {
//     console.log(false);

// }


// if(1 != "1") {
//     console.log(true);
// }
// else {
//     console.log(false);

// }


// let place = "Manc";
// let weather = "Rain";
// if(place == "Manc" && weather == "Suny"){
//     console.log("Check again");
// }
// else if (place == "Manc" && weather == "Rain"){
//     console.log("Obvs");
// }
// else{
//     console.log("What it isn't raining?")
// }



// switch(){
//     case :
//         console.log();
//         break
//     case :
//         console.log();
//         break
//         case :
//         console.log();
//         break
//     case :
//         console.log();
//         break
//         case :
//         console.log();
//         break
//     case :
//         console.log();
//         break
//         case :
//         console.log();
//         break
//     case :
//         console.log();
//         break                        
//     default:
        
//         break
// }


// Activity 1 (If Else statment)

// let age = 18;
// let country = "Usa"
// if(age > 17 && country === "UK"){
//     console.log("Yes I can serve you");
// }
// else{
//     console.log("You aren't old enough")
// }


// Activity 2 (If Else statement)

// let topping = "Olives";
// switch(topping){
//     case "Chicken":
//         console.log("These are important ingredients for my pizza.")
//         break
//     case "Peppers":
//         console.log("Green peppers are fine but no red or yellow peppers please.")  
//         break
//     case "Olives":
//         console.log(`${topping} should not be on the pizza`)     
//     default:
//         console.log("I'm not sure if I like that.")
//         break
// }


// Activity 3 (If Else statement)

// let password = "hello world";
// if(password.length < 8){
//     console.log("Password is too short");
// }
// else{
//     console.log(password);
// }

// let num = 15;
// if(num % 3 == 0 || num % 5 == 0){
//     console.log(`${num} is divisible by 3 or 5 or maybe by both.`)
// }
// else{
//     console.log(`${num} is neither divisible by 3 nor by 5`)
// }


// Activity 4 (If Else statement)

// let num = 25;
// if(num % 3 == 0 && num % 5 == 0){
//     console.log("fizz buzz");
// }
// else if(num % 3 == 0){
//     console.log("fizz")
// }
// else if(num % 5 == 0){
//     console.log("buzz")
// }
// else{
//     console.log(num)
// }

// Activity 5 (If Else statement)

// let num = 1001;
// let numReverse = (""+num).split("").reverse().join("");

// if(num == numReverse){
//     console.log(`${num} is a palindrome.`)
// }
// else{
//     console.log(`${num} is NOT a palindrome.`)
// }

// Activity 6 (If Else statement)

// let time = 16
// let placeOfWork = ""
// let townOfHome = ""
// if(time > 0 && time < 7 ){
//     console.log("I’m at home.")
// }
// else if(time > 20 && time <= 23){
//     console.log("I’m at Home.")
// }
// else if(time > 9 && time < 18){
//     console.log("I’m at work.")
// }
// else{
//     console.log("I'm commuting")
// } 

// Activity 7 (If Else statement)

// let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// let lastVowelIndex = 0
// for(let i = 0; i < str.length; i++){
//     if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u")
//         lastVowelIndex = i
// }

// console.log(lastVowelIndex);


// Activity 8 (If Else statement)

// let word = "america"

// if(word[0] === (word[word.length-1])){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// Activity 9 (If Else statement)

// let num1 = 5;
// let num2 = 6;

// if((num1+num2) % 2 == 0 ){
//     console.log(num1+num2);
// }
// else{
//     console.log(num1*num2)
// }
