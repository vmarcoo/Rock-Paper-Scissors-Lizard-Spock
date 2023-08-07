let initYouScore = 0;
let initPcScore = 0;

function rock (){
    const textResult = document.querySelector("#textResult");
    const pcRock = document.getElementById("pcRock");
    const pcPaper = document.getElementById("pcPaper");
    const pcScissors = document.getElementById("pcScissors");
    const pcLizard = document.getElementById("pcLizard");
    const pcSpock = document.getElementById("pcSpock");
    const youScore = document.querySelector("#youScore");
    const pcScore = document.querySelector("#pcScore");
    const pc = Math.floor(Math.random()*10);
    pcRock.style.opacity = "100%";
    pcPaper.style.opacity = "100%";
    pcScissors.style.opacity = "100%";
    pcLizard.style.opacity = "100%";
    pcSpock.style.opacity = "100%";
    if (pc === 0 || pc === 1){textResult.innerHTML = "It's a tie!", pcRock.style.opacity = "10%"}
    else if (pc === 2 || pc === 3){textResult.innerHTML = "You Lose! Paper covers Rock!", pcPaper.style.opacity = "10%", pcScore.innerHTML = ++initPcScore}
    else if (pc === 4 || pc === 5){textResult.innerHTML = "You win! Rock crushes Scissors!", pcScissors.style.opacity = "10%", youScore.innerHTML = ++initYouScore}
    else if (pc === 6 || pc === 7){textResult.innerHTML = "You win! Rock crushes Lizard!", pcLizard.style.opacity = "10%", youScore.innerHTML = ++initYouScore}
    else if (pc === 8 || pc === 9){textResult.innerHTML = "You lose! Spock vaporizes Rock!", pcSpock.style.opacity = "10%", pcScore.innerHTML = ++initPcScore}
};

function paper (){
    const textResult = document.querySelector("#textResult");
    const pcRock = document.getElementById("pcRock");
    const pcPaper = document.getElementById("pcPaper");
    const pcScissors = document.getElementById("pcScissors");
    const pcLizard = document.getElementById("pcLizard");
    const pcSpock = document.getElementById("pcSpock");
    const youScore = document.querySelector("#youScore");
    const pcScore = document.querySelector("#pcScore");
    const pc = Math.floor(Math.random()*10);
    pcRock.style.opacity = "100%";
    pcPaper.style.opacity = "100%";
    pcScissors.style.opacity = "100%";
    pcLizard.style.opacity = "100%";
    pcSpock.style.opacity = "100%";
    if (pc === 0 || pc === 1){textResult.innerHTML = "You Win! Paper covers Rock!", pcRock.style.opacity = "10%", youScore.innerHTML = ++initYouScore}
    else if (pc === 2 || pc === 3){textResult.innerHTML = "It's a tie!", pcPaper.style.opacity = "10%"}
    else if (pc === 4 || pc === 5){textResult.innerHTML = "You lose! Scissors cuts Paper!", pcScissors.style.opacity = "10%", pcScore.innerHTML = ++initPcScore}
    else if (pc === 6 || pc === 7){textResult.innerHTML = "You lose! Lizard eats Paper!", pcLizard.style.opacity = "10%", pcScore.innerHTML = ++initPcScore}
    else if (pc === 8 || pc === 9){textResult.innerHTML = "You win! Paper disapproves Spock!", pcSpock.style.opacity = "10%", youScore.innerHTML = ++initYouScore}
};

function scissors (){
    const textResult = document.querySelector("#textResult");
    const pcRock = document.getElementById("pcRock");
    const pcPaper = document.getElementById("pcPaper");
    const pcScissors = document.getElementById("pcScissors");
    const pcLizard = document.getElementById("pcLizard");
    const pcSpock = document.getElementById("pcSpock");
    const youScore = document.querySelector("#youScore");
    const pcScore = document.querySelector("#pcScore");
    const pc = Math.floor(Math.random()*10);
    pcRock.style.opacity = "100%";
    pcPaper.style.opacity = "100%";
    pcScissors.style.opacity = "100%";
    pcLizard.style.opacity = "100%";
    pcSpock.style.opacity = "100%";
    if (pc === 0 || pc === 1){textResult.innerHTML = "You lose! Rock crushes Scissors!", pcRock.style.opacity = "10%", pcScore.innerHTML = ++initPcScore}
    else if (pc === 2 || pc === 3){textResult.innerHTML = "You win! Scissors cuts Paper!", pcPaper.style.opacity = "10%", youScore.innerHTML = ++initYouScore}
    else if (pc === 4 || pc === 5){textResult.innerHTML = "It's a tie!", pcScissors.style.opacity = "10%"}
    else if (pc === 6 || pc === 7){textResult.innerHTML = "You win! Scissors decapitates Lizard!", pcLizard.style.opacity = "10%", youScore.innerHTML = ++initYouScore}
    else if (pc === 8 || pc === 9){textResult.innerHTML = "You lose! Spock smashes Scissors!", pcSpock.style.opacity = "10%", pcScore.innerHTML = ++initPcScore}
};

function lizard (){
    const textResult = document.querySelector("#textResult");
    const pcRock = document.getElementById("pcRock");
    const pcPaper = document.getElementById("pcPaper");
    const pcScissors = document.getElementById("pcScissors");
    const pcLizard = document.getElementById("pcLizard");
    const pcSpock = document.getElementById("pcSpock");
    const youScore = document.querySelector("#youScore");
    const pcScore = document.querySelector("#pcScore");
    const pc = Math.floor(Math.random()*10);
    pcRock.style.opacity = "100%";
    pcPaper.style.opacity = "100%";
    pcScissors.style.opacity = "100%";
    pcLizard.style.opacity = "100%";
    pcSpock.style.opacity = "100%";
    if (pc === 0 || pc === 1){textResult.innerHTML = "You lose! Rock crushes Lizard!", pcRock.style.opacity = "10%", pcScore.innerHTML = ++initPcScore}
    else if (pc === 2 || pc === 3){textResult.innerHTML = "You win! Lizard eats Paper!", pcPaper.style.opacity = "10%", youScore.innerHTML = ++initYouScore}
    else if (pc === 4 || pc === 5){textResult.innerHTML = "You lose! Scissors decapitates Lizard!", pcScissors.style.opacity = "10%", pcScore.innerHTML = ++initPcScore}
    else if (pc === 6 || pc === 7){textResult.innerHTML = "It's a tie!", pcLizard.style.opacity = "10%"}
    else if (pc === 8 || pc === 9){textResult.innerHTML = "You win! Lizard poisons Spock!", pcSpock.style.opacity = "10%", youScore.innerHTML = ++initYouScore}
};

function spock(){
    const textResult = document.querySelector("#textResult");
    const pcRock = document.getElementById("pcRock");
    const pcPaper = document.getElementById("pcPaper");
    const pcScissors = document.getElementById("pcScissors");
    const pcLizard = document.getElementById("pcLizard");
    const pcSpock = document.getElementById("pcSpock");
    const youScore = document.querySelector("#youScore");
    const pcScore = document.querySelector("#pcScore");
    const pc = Math.floor(Math.random()*10);
    pcRock.style.opacity = "100%";
    pcPaper.style.opacity = "100%";
    pcScissors.style.opacity = "100%";
    pcLizard.style.opacity = "100%";
    pcSpock.style.opacity = "100%";
    if (pc === 0 || pc === 1){textResult.innerHTML = "You win! Spock vaporizes Rock!", pcRock.style.opacity = "10%", youScore.innerHTML = ++initYouScore}
    else if (pc === 2 || pc === 3){textResult.innerHTML = "You lose! Paper disapproves Spock!", pcPaper.style.opacity = "10%", pcScore.innerHTML = ++initPcScore}
    else if (pc === 4 || pc === 5){textResult.innerHTML = "You win! Spock smashes Scissors!", pcScissors.style.opacity = "10%", youScore.innerHTML = ++initYouScore}
    else if (pc === 6 || pc === 7){textResult.innerHTML = "You lose! Lizard poisons Spock!", pcLizard.style.opacity = "10%", pcScore.innerHTML = ++initPcScore}
    else if (pc === 8 || pc === 9){textResult.innerHTML = "It's a tie!", pcSpock.style.opacity = "10%"}
};