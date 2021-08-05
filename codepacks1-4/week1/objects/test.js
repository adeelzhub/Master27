

// let balls = ".......111....3.4..6...1..11....2....3...W...11...1..2...33...44...W..W..1..2..1.22....1..1......1....11...111.....1.111..222.333...W...211..22.11....1...1...1...1...1..1..3...4....2...1....3...1....646421.3.222..111...333...444......1111...22..333.444............1...1...1.....11.22.WWW11.....1....11....1....1.W...W..1666..W"

// let newStr = (str.match(/.{1,6}/g));

// console.log(newStr);
// let overs = {
//         'over 1': '......',
//         'over 2': '.111..',
//         'over 3': '..3.4.',
//         'over 4': '.6...1',
//         'over 5': '..11..',
//         'over 6': '..2...',
//         'over 7': '.3...W',
//         'over 8': '...11.',
//         'over 9': '..1..2',
//         'over 10': '...33.',
//         'over 11': '..44..',
//         'over 12': '.W..W.',
//         'over 13': '.1..2.',
//         'over 14': '.1.22.',
//         'over 15': '...1..',
//         'over 16': '1.....',
//         'over 17': '.1....',
//         'over 18': '11...1',
//         'over 19': '11....',
//         'over 20': '.1.111',
//         'over 21': '..222.',
//         'over 22': '333...',
//         'over 23': 'W...21',
//         'over 24': '1..22.',
//         'over 25': '11....',
//         'over 26': '1...1.',
//         'over 27': '..1...',
//         'over 28': '1...1.',
//         'over 29': '.1..3.',
//         'over 30': '..4...',
//         'over 31': '.2...1',
//         'over 32': '....3.',
//         'over 33': '..1...',
//         'over 34': '.64642',
//         'over 35': '1.3.22',
//         'over 36': '2..111',
//         'over 37': '...333',
//         'over 38': '...444',
//         'over 39': '......',
//         'over 40': '1111..',
//         'over 41': '.22..3',
//         'over 42': '33.444',
//         'over 43': '......',
//         'over 44': '......',
//         'over 45': '1...1.',
//         'over 46': '..1...',
//         'over 47': '..11.2',
//         'over 48': '2.WWW1',
//         'over 49': '1.....',
//         'over 50': '1....1',
//         'over 51': '1....1',
//         'over 52': '....1.',
//         'over 53': 'W...W.',
//         'over 54': '.1666.',
//         'over 55': '.W'
// }


// let over = 0;


// for(let i = 0; i < newStr.length; i++){
//     over++
//     overs[`over ${over}`] = newStr[i];
//     // console.log(`Over ${over} : ${newStr[i]}`);
// }

// console.log(overs);

// let balls = ".......111....3.4..6...1..11....2....3...W...11...1..2...33...44...W..W..1..2..1.22....1..1......1....11...111.....1.111..222.333...W...211..22.11....1...1...1...1...1..1..3...4....2...1....3...1....646421.3.222..111...333...444......1111...22..333.444............1...1...1.....11.22.WWW11.....1....11....1....1.W...W..1666..W"
// let players = {
//     'Player 1': [],
//     'Player 2': [],
//     'Player 3': [],
//     'Player 4': [],
//     'Player 5': [],
//     'Player 6': [],
//     'Player 7': [],
//     'Player 8': [],
//     'Player 9': [],
//     'Player 10': []
// }


// This functions adds number of players to an object named players who played, from the String

// function addPlayers(ballsBowled){
// let player = 1;
// for(let k = 0; k < balls.length; k++){
//     if(balls[k] === "W"){
//     players[`Player ${player}`] = [];
//     player++
// }

// }
// return players;
// }

// console.log(addPlayers(balls))

// function addScore(ballBowled){
//     let score = 0;
//     for(let i = 0; i < balls.length; i++){
//         if(balls[i] !== "." && balls[i] !== "W"){
//             score = score + (+balls[i])
//         }
//     }
//     return score;
// }

// console.log(addScore(balls));



// function addScore(ballBowled){
//     let score = 0;
//     let player = 1;
//     for(let j=0; j < balls.length; j++){
//         if(balls[j] != "."){
//             score = score + balls[j];
//         }else if(balls[j] === "W"){
//                 players[`Player ${player}`].push(score);
//                 score = 0;
//             }

//         }
//         return players;
//     }
    


// console.log(addScore(balls));


// let balls = "..2.W.2123.6.4WWWW2W3"
// let balls = ".......111....3.4..6...1..11....2....3...W...11...1..2...33...44...W..W..1..2..1.22....1..1......1....11...111.....1.111..222.333...W...211..22.11....1...1...1...1...1..1..3...4....2...1....3...1....646421.3.222..111...333...444......1111...22..333.444............1...1...1.....11.22.WWW11.....1....11....1....1.W...W..1666..W"

// let team = ["batsMan3","batsMan4","batsMan5","batsMan6","batsMan7","batsMan8","batsMan9","batsMan10","batsMan11"]

// let batsMen = {
//         "batsMan1": 0,
//         "batsMan2": 0,
//         "batsMan3": 0,
//         "batsMan4": 0,
//         "batsMan5": 0,
//         "batsMan6": 0,
//         "batsMan7": 0,
//         "batsMan8": 0,
//         "batsMan9": 0,
//         "batsMan10": 0,
//         "batsMan11": 0, 
//         "TotalScore": 0

// }
// let ballsSoFar = 0;
// let wickets = 0;
// let currentBallScore = 0;
// let currentBatsMen = ["batsMan1","batsMan2"]



// // Function to  switch players if it is over end
// function overEnd(){
//     if(ballsSoFar % 6 == 0){
//         currentBatsMen.reverse();
//     }
// }

// // Function to switch players based on runs made 
// function switchBatsmen(){
//     if(currentBallScore % 2 !=0){
//         currentBatsMen.reverse();
//     }
// }


// // Function to update score to scoreboard
// function scoreUpdate(){
//     if(currentBallScore === "."){
//         overEnd();
//     }else{
//         batsMen["TotalScore"] = batsMen["TotalScore"] + (+currentBallScore);
//         batsMen[currentBatsMen[0]] = batsMen[currentBatsMen[0]] + (+currentBallScore);
//         switchBatsmen()
//         overEnd();
//     }
// }
// // Function in case of wicket taken

// function wicket(){
//     wickets++
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
        
// console.log(`currentBatsMen = ${currentBatsMen}`);
// console.log(`team = ${team}`) 
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log(batsMen);
// console.log();
// console.log(wickets);
// console.log(ballsSoFar);




function reverseString(str){
    return str.split("").reverse().join("");
}
    
console.log(reverseString("hello"));



