let balls = ".......111....3.4..6...1..11....2....3...W...11...1..2...33...44...W..W..1..2..1.22....1..1......1....11...111.....1.111..222.333...W...211..22.11....1...1...1...1...1..1..3...4....2...1....3...1....646421.3.222..111...333...444......1111...22..333.444............1...1...1.....11.22.WWW11.....1....11....1....1.W...W..1666..W"

let team = ["batsMan 3","batsMan 4","batsMan 5","batsMan 6","batsMan 7","batsMan 8","batsMan 9","batsMan 10","batsMan 11"]

let batsMen = {
        "batsMan 1": 0,
        "batsMan 2": 0,
        "batsMan 3": 0,
        "batsMan 4": 0,
        "batsMan 5": 0,
        "batsMan 6": 0,
        "batsMan 7": 0,
        "batsMan 8": 0,
        "batsMan 9": 0,
        "batsMan 10": 0,
        "batsMan 11": 0, 

}


let ballsSoFar = 0;
let wickets = 0;
let totalScore = 0;
let currentBallScore = 0;
let currentBatsMen = ["batsMan 1","batsMan 2"]



// Function to  switch players if it is over end
function overEnd(){
    if(ballsSoFar % 6 == 0){
        currentBatsMen.reverse();
    }
}

// Function to switch players based on runs made 
function switchBatsmen(){
    if(currentBallScore % 2 !=0){
        currentBatsMen.reverse();
    }
}


// Function to update score to scoreboard
function scoreUpdate(){
    if(currentBallScore === "."){
        overEnd();
    }else{
        totalScore = totalScore + (+currentBallScore);
        batsMen[currentBatsMen[0]] = batsMen[currentBatsMen[0]] + (+currentBallScore);
        switchBatsmen()
        overEnd();
    }
}
// Function in case of wicket taken

function wicket(){
    wickets++
    batsMen[currentBatsMen[0]][1] = "Out"
    currentBatsMen[0] = team[0]
    team.shift(); 
    currentBallScore = 0;
    overEnd();   
}
// Function-A Batsman did not bat
console.log("")

for(let i = 0; i < balls.length; i++){
    ballsSoFar++
    if(balls[i] === "W"){
        wicket();
        // switchBatsmen();
    }
    else{
        currentBallScore = balls[i];
        scoreUpdate();

    }
    }         
        
    
let batsMenArray = Object.keys(batsMen);
    

for(let k = 0; k < batsMenArray.length; k++){
    if(team.indexOf(batsMenArray[k]) != -1){
        console.log(`${batsMenArray[k]}: ${batsMen[batsMenArray[k]]}  - `)
    }else if(currentBatsMen.indexOf(batsMenArray[k]) != -1){
        console.log(`${batsMenArray[k]}: ${batsMen[batsMenArray[k]]}  Not Out `)
    }else{
        console.log(`${batsMenArray[k]}: ${batsMen[batsMenArray[k]]}  `)
    }
}


console.log("Overs: " + (ballsSoFar/6).toFixed(1));
console.log(`Total: ${totalScore} / ${wickets}`)
