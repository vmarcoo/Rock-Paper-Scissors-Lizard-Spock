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
    if (pc === 0 || pc === 1){textResult.innerText = "It's a tie!", pcRock.style.opacity = "10%"}
    else if (pc === 2 || pc === 3){textResult.innerText = "You Lose! Paper covers Rock!", pcPaper.style.opacity = "10%", pcScore.innerText = ++initPcScore}
    else if (pc === 4 || pc === 5){textResult.innerText = "You win! Rock crushes Scissors!", pcScissors.style.opacity = "10%", youScore.innerText = ++initYouScore}
    else if (pc === 6 || pc === 7){textResult.innerText = "You win! Rock crushes Lizard!", pcLizard.style.opacity = "10%", youScore.innerText = ++initYouScore}
    else if (pc === 8 || pc === 9){textResult.innerText = "You lose! Spock vaporizes Rock!", pcSpock.style.opacity = "10%", pcScore.innerText = ++initPcScore}
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
    if (pc === 0 || pc === 1){textResult.innerText = "You Win! Paper covers Rock!", pcRock.style.opacity = "10%", youScore.innerText = ++initYouScore}
    else if (pc === 2 || pc === 3){textResult.innerText = "It's a tie!", pcPaper.style.opacity = "10%"}
    else if (pc === 4 || pc === 5){textResult.innerText = "You lose! Scissors cuts Paper!", pcScissors.style.opacity = "10%", pcScore.innerText = ++initPcScore}
    else if (pc === 6 || pc === 7){textResult.innerText = "You lose! Lizard eats Paper!", pcLizard.style.opacity = "10%", pcScore.innerText = ++initPcScore}
    else if (pc === 8 || pc === 9){textResult.innerText = "You win! Paper disapproves Spock!", pcSpock.style.opacity = "10%", youScore.innerText = ++initYouScore}
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
    if (pc === 0 || pc === 1){textResult.innerText = "You lose! Rock crushes Scissors!", pcRock.style.opacity = "10%", pcScore.innerText = ++initPcScore}
    else if (pc === 2 || pc === 3){textResult.innerText = "You win! Scissors cuts Paper!", pcPaper.style.opacity = "10%", youScore.innerText = ++initYouScore}
    else if (pc === 4 || pc === 5){textResult.innerText = "It's a tie!", pcScissors.style.opacity = "10%"}
    else if (pc === 6 || pc === 7){textResult.innerText = "You win! Scissors decapitates Lizard!", pcLizard.style.opacity = "10%", youScore.innerText = ++initYouScore}
    else if (pc === 8 || pc === 9){textResult.innerText = "You lose! Spock smashes Scissors!", pcSpock.style.opacity = "10%", pcScore.innerText = ++initPcScore}
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
    if (pc === 0 || pc === 1){textResult.innerText = "You lose! Rock crushes Lizard!", pcRock.style.opacity = "10%", pcScore.innerText = ++initPcScore}
    else if (pc === 2 || pc === 3){textResult.innerText = "You win! Lizard eats Paper!", pcPaper.style.opacity = "10%", youScore.innerText = ++initYouScore}
    else if (pc === 4 || pc === 5){textResult.innerText = "You lose! Scissors decapitates Lizard!", pcScissors.style.opacity = "10%", pcScore.innerText = ++initPcScore}
    else if (pc === 6 || pc === 7){textResult.innerText = "It's a tie!", pcLizard.style.opacity = "10%"}
    else if (pc === 8 || pc === 9){textResult.innerText = "You win! Lizard poisons Spock!", pcSpock.style.opacity = "10%", youScore.innerText = ++initYouScore}
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
    if (pc === 0 || pc === 1){textResult.innerText = "You win! Spock vaporizes Rock!", pcRock.style.opacity = "10%", youScore.innerText = ++initYouScore}
    else if (pc === 2 || pc === 3){textResult.innerText = "You lose! Paper disapproves Spock!", pcPaper.style.opacity = "10%", pcScore.innerText = ++initPcScore}
    else if (pc === 4 || pc === 5){textResult.innerText = "You win! Spock smashes Scissors!", pcScissors.style.opacity = "10%", youScore.innerText = ++initYouScore}
    else if (pc === 6 || pc === 7){textResult.innerText = "You lose! Lizard poisons Spock!", pcLizard.style.opacity = "10%", pcScore.innerText = ++initPcScore}
    else if (pc === 8 || pc === 9){textResult.innerText = "It's a tie!", pcSpock.style.opacity = "10%"}
};