// // **********************************
// // Code Nation - wearecodenation.com
// // Week 1 - Objects
// // **********************************

// //
// // Example 1 - basic object
// //


// //
// // Example 2 - accessing object data
// //


// //
// // Example 3 - using methods
// //


// //
// // Example 4 - using object data within a function (method)
// //



// // let cafe ={
// //     name: "Beans HQ",
// //     noOfTables: 40,
// //     hasDiscount: true,
// //     drinks: [
// //         "Coffee",
// //         "Tea",
// //         "OJ",
// //         "Milk",
// //         "Water"
// //     ],
// //     owner:{
// //         name: "Pedro",
// //         isManager: false,
// //         hasMortgage: false
// //     },
// //     morningOffer: "Free pastry with any hot drink",
// //     lunchOffer: "Free coffee with any sandwich"
// // }

// // cafe.drinks.push("Hot chocolate");
// // cafe["drinks"].push("Mocha")
// // cafe.food = ["Sandwich","Cookie","Muffin"]

// // console.log(cafe);



// // let person ={
// //     name: "Ali",
// //     age: 30
// // }
// // let userSelection = "name"

// // console.log(cafe["name"])
// // console.log(`cafe.${userSelection}`) needs correction
// // console.log(cafe.name)

// // let time = new Date();

// // if( time.getHours() < 12 && cafe.hasDiscount){
// //     console.log("Breakfast offer in on, details:")
// //     console.log(cafe.morningOffer)
// // }else if ( time.getHours() > 12 && time.getHours() <= 16 cafe.hasDiscount){
// //     console.log("Lunch offer is on, details:")
// //     console.log(cafe.lunchOffer)
// // }else{
// //     console.log("No offers at this time")
// // }


// // let alarmObj = {
// //     weekendAlarm : "no Alarm needed",
// //     weekdayAlarm: "get up at 7am"
// // }

// // let day = "Saturday"
// // let alarm= ""

// // function checkAlarm(day){

// // if(day === "Saturday" || day === "Sunday"){
// //     alarm = alarmObj.weekendAlarm
// // }else{
// //     alarm = alarmObj.weekdayAlarm
// // }
// //     return alarm;
// // }

// // console.log(checkAlarm("Monday"));



// // ---------------------------------------



// // ------------------------------

// // person.favouriteSong = ["Dancing with wolves","Let go"]

// // console.log(person);





// // let cafe ={
// //         name: "Beans HQ",
// //         noOfTables: 40,
// //         hasDiscount: false,
// //         drinks: [
// //             "Coffee",
// //             "Tea",
// //             "OJ",
// //             "Milk",
// //             "Water"
// //         ],
// //         owner:{
// //             name: "Pedro",
// //             isManager: false,
// //             hasMortgage: false
// //         },
// //         morningOffer: "Free pastry with any hot drink",
// //         lunchOffer: "Free coffee with any sandwich",
// //         openCafe () {
// //             if(this.hasDiscount){
// //                 return "Come in and take a look at our special offers"
// //             }else{
// //             return "Come on in..."
// //         }
// //     },
// //         closeCafe (){
// //             return "Come back later we are close right now"
// //         }
// //     }

// //     console.log(cafe.openCafe());

    


// // Activity1: Objects



// // let person ={
// //     name: "Ali",
// //     age: 30,
// //     sayHi (){
// //         return `Hello my name is ${this.name}`
// //     }
// // }

// // console.log(person.sayHi());

// // Activity2: Objects



// // let pet = {
// //     name: "Buffy",
// //     typeOfPet: "Dog",
// //     age:3,
// //     colour: "Black",
// //     eat () {
// //         return `${this.name} is eating `
// //     },
// //     drink(){
// //         return `${this.name} is drinking`
// //     }
// // }


// // console.log(pet.drink());

// // Activity3: Objects

// // let balls = ".1...123W...4..1...2...1.....11.....2...2.2....22...1.1..11.1..11..111.11W1.6.1.2...1....4...2.....1.1.4.4.6.1..3.11.2.11.12...4.....2...1.1.1....111.21.W..6....2.2.W.111..1.1.2.1.12..W3...4W..6.W.1.1.11.2.....1.1.1.12.2.4..1..6.4.666.1.1W..3.44.3.2.1.1.11.1.21.2121.111.4W.1.14142.1.111.11.1212.13.....3.3.1.112.22.1.121W"

// let balls = ".......111....3.4..6...1..11....2....3...W...11...1..2...33...44...W..W..1..2..1.22....1..1......1....11...111.....1.111..222.333...W...211..22.11....1...1...1...1...1..1..3...4....2...1....3...1....646421.3.222..111...333...444......1111...22..333.444............1...1...1.....11.22.WWW11.....1....11....1....1.W...W..1666..W"

// let team = ["batsMan 3","batsMan 4","batsMan 5","batsMan 6","batsMan 7","batsMan 8","batsMan 9","batsMan 10","batsMan 11"]

// let batsMen = {
//         "batsMan 1": 0,
//         "batsMan 2": 0,
//         "batsMan 3": 0,
//         "batsMan 4": 0,
//         "batsMan 5": 0,
//         "batsMan 6": 0,
//         "batsMan 7": 0,
//         "batsMan 8": 0,
//         "batsMan 9": 0,
//         "batsMan 10": 0,
//         "batsMan 11": 0, 

// }


// let ballsSoFar = 0;
// let wickets = 0;
// let totalScore = 0;
// let currentBallScore = 0;
// let currentBatsMen = ["batsMan 1","batsMan 2"]



// // Function-switch players-over end
// function overEnd(){
//     if(ballsSoFar % 6 == 0){
//         currentBatsMen.reverse();
//     }
// }

// // Function-switch players based on runs made 
// function switchBatsmen(){
//     if(currentBallScore % 2 !=0){
//         currentBatsMen.reverse();
//     }
// }


// // Function-update scores
// function scoreUpdate(){
//     if(currentBallScore === "."){
//         overEnd();
//     }else{
//         totalScore = totalScore + (+currentBallScore);
//         batsMen[currentBatsMen[0]] = batsMen[currentBatsMen[0]] + (+currentBallScore);
//         switchBatsmen()
//         overEnd();
//     }
// }
// // Function-wicket taken

// function wicket(){
//     wickets++
//     batsMen[currentBatsMen[0]][1] = "Out"
//     currentBatsMen[0] = team[0]
//     team.shift(); 
//     currentBallScore = 0;
//     overEnd();   
// }


// for(let i = 0; i < balls.length; i++){
//     ballsSoFar++
//     if(balls[i] === "W"){
//         wicket();
//         // switchBatsmen();
//     }
//     else{
//         currentBallScore = balls[i];
//         scoreUpdate();

//     }
//     }         
        

//     // Output
// let batsMenArray = Object.keys(batsMen);

// for(let k = 0; k < batsMenArray.length; k++){
//     if(team.indexOf(batsMenArray[k]) != -1){
//         console.log(`${batsMenArray[k]}: ${batsMen[batsMenArray[k]]}  - `)
//     }else if(currentBatsMen.indexOf(batsMenArray[k]) != -1){
//         console.log(`${batsMenArray[k]}: ${batsMen[batsMenArray[k]]}  Not Out `)
//     }else{
//         console.log(`${batsMenArray[k]}: ${batsMen[batsMenArray[k]]}  `)
//     }
// }


// console.log("Overs: " + (ballsSoFar/6).toFixed(1));
// console.log(`Total: ${totalScore} / ${wickets}`)



function dataChecker(string, rank){
    if(string === "codenation" && rank === 1){
        console.log(`Both ${string} and the ranking ${rank} are correct`);
    }else if(string === "codenation" && rank !== 1){
        console.log(`Your string ${string} is correct but your ranking ${rank} is incorrect`);
    }else{
        console.log(`Both your string ${string} and your ranking ${rank} are wrong`)
    }
}

dataChecker("codenation",2);