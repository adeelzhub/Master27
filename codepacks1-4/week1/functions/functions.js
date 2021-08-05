// **********************************
// Code Nation - wearecodenation.com
// Week 1 - Functions
// **********************************

//
// Example 1 - simple function
//

// const pressGrindBeans = () =>{
//     console.log("Grinding for 20 seconds");
// }
// pressGrindBeans();

//
// Example 2 - on/off function using boolean
//

// let coffeeISGrinding = false;

// const pressGrindBeans = () => {
//     if(coffeeISGrinding){
//         console.log("Stopping the grind");
//         coffeeISGrinding = false;
//     }else{
//         console.log("Grinding is about to begin")
//         coffeeISGrinding = true
//     }
// }
//
// Example 3 - using parameters + template literals
//


//
// Example 4 - using parameters + passing variable data
//


//
// Example 5 - returning
//

// const addUp = (num1, num2)=>{
//     return num1 + num2;
// }

// console.log(addUp(2,5));
// //
// Example 6 - Arrow function syntax
//


//
// Example 7 - Function declaration
//


//
// Example 8
//


// Activity 1:

function factorial (n){
    if ((n === 0) || (n === 1)){
        return 1;
    }else{
        return(n * factorial(n-1));
    }
}


console.log(factorial(2));


