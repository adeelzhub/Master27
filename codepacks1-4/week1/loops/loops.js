// **********************************
// Code Nation - wearecodenation.com
// Week 1 - Loops
// **********************************

//
// Example 1 - from an array to a loop
//

// The array way

// Loop-de-doop


//
// Example 2 - Loops with if statements
//


//
// Example 3 - Loops with function
//


//
// Example 4 - While loop
//


//
// Example 5 - While loop with random increments
//


//
// Example 6
//



// let coffeeOrder = ["Alex - Cortado","Ben - Cortado","Charlie - Whatever's new"];
// // console.log(coffeeOrder);
// // console.log(coffeeOrder[2]);
// coffeeOrder[1] = "Ann - Vanilla latte"
// // console.log(coffeeOrder);
// // console.log(coffeeOrder.length);
// coffeeOrder.push("Donna - espresoo")
// // console.log(coffeeOrder);
// coffeeOrder.pop()
// console.log(coffeeOrder);

// let favouriteSong = ["Hello","The world","Let me say"];
// // console.log(favouriteSong);
// favouriteSong.push("Rain");
// favouriteSong.unshift("Earth");
// // console.log(favouriteSong);  
// favouriteSong.pop();
// // console.log(favouriteSong);
// favouriteSong.shift();
// // console.log(favouriteSong);

// let arr = [0,1,2,3,4,5,6,7,8,9];
// let newArr = arr.splice(2,2,45);
// console.log(arr);
// console.log(newArr);

// let favouriteDrinks = ["Orange Juice","Coke","Tango"];
// console.log(favouriteDrinks[0]);
// console.log(favouriteDrinks[1]);
// console.log(favouriteDrinks[2]);

// for( let i=0;i<favouriteDrinks.length;i++){
//     console.log(favouriteDrinks[i]);
// }

// let multiplesTwo = [];
// for(let i = 0; i < 20; i++){
//     if(i % 2 == 0){
//         multiplesTwo.push(i);
//     }
// }
// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);

// let age = 15;

// while(age < 18){
//     console.log("You're a child");
//     age++;

// }
// console.log("You're an adult!");

// let cards = ["Diamond","Spade","Heart","Club"];
// let currentCard = "Club";

// while(currentCard != "Spade"){
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }

// console.log(currentCard);
// ----------------------------------------------------------------

// Activity1: Arrys_loops

// let favFilms = ["Water world","Stranger","Glass","The Game","Bad Trip"]
// favFilms.push("Avatar");
// favFilms.unshift("Pulp fiction");
// for(let i = 0; i < favFilms.length; i++){
//     console.log(favFilms[i]);
// }

// -------------------------------------------------------------

// Activity2: Arrys_loops

// let num = 0
// while(num < 6){
//     console.log(Math.floor(Math.random()*50));
//     num++
// } 

// ----------------------------------------------------------

// Activity3: Arrys_loops

// let num = 9;
// while(num >=0){
//     console.log(num);
//     num--
// }

// for(let i = 9; i >= 0; i--){
//     console.log(i);
// }

// ------------------------------------------------------------

// Activity4: Arrys_loops


// let favFilms = ["Water world","Stranger","Ghostbuster","Glass","The Game"];

// for(let i = 0; i < favFilms.length; i++){
//     console.log(favFilms[i]);
// }
// if(favFilms[2] == "Ghostbuster"){
//     console.log("Yay it’s Ghostbusters")
// }
// else{
//     console.log("Boo! we want Ghostbusters")
// }

// ---------------------------------------------------

// Activity5: Arrys_loops

// let num = 0;
// let i = 0;

// while(i < 6 ){
//     num = (Math.floor(Math.random()*30));
//     i++
//     if(num % 7 == 0){
//         console.log(`The random number generated is ${num} and it IS divisible by 7.`)
//     }
//     else{
//         console.log(`The random number generated is ${num} and it IS NOT divisible by 7.`)
//     }
// }

// ------------------------------------------

// Activity6: Arrys_loops

// let bobsFollowers = ["Deepak","James","Dominic","Jo"]
// let hannahsFollowers = ["Jo","Guru","Deepak","Natasha"]
// let followBoth = []

// for(let i = 0; i < bobsFollowers.length; i++){
//     for(let j = 0; j < hannahsFollowers.length; j++){
//         if(bobsFollowers[i] == hannahsFollowers[j]){
//             followBoth.push(bobsFollowers[i]);
//         }
//     }
// }

// console.log(followBoth);

// ----------------------------------------------

// let i = 100;
// while(i > 10){
//     if(i % 2 == 0){
//         console.log(`One of the Even numbers between 10 and 100 is ${i}`);
//     }
//     i--   
// }


