var userScore = 0;
var compScore = 0;
const userScoreElem = document.getElementById("user-score");
const compScoreElem = document.getElementById("comp-score");
const scoreBoardElem = document.querySelector(".score-board");
const resultElem = document.querySelector(".result");
const rockElem = document.getElementById("rock");
const paperElem = document.getElementById("paper");
const scissorsElem = document.getElementById("scissors");
const resultImageElem = document.getElementById("result-image");


function change_result(a){
	resultElem.innerHTML=a;
}

function game(userChoice) {
	

    const compChoice = getCompChoice();
    switch(userChoice+compChoice){
    	case "rs":
    	case "pr":
    	case "sp":
    		win(userChoice,compChoice);
    		break;
    	case "rp":
    	case "ps":
    	case "sr":
    		lose(userChoice,compChoice);
    		break;
    	case "rr":
    	case "pp":
    	case "ss":
    		tie(userChoice,compChoice);
    		break;
    }
}

function getCompChoice() {
    const choices = ["r", "p", "s"];
    const randNum = Math.floor(Math.random() * 3)
    return choices[randNum];


}

function win(user,comp){
	userScore++;
	userScoreElem.innerHTML=userScore;
	resultElem.innerHTML=user+" beats "+comp+" You Win."
	resultImageElem.src = "imgs/"+user+comp+".gif";

}
function lose(user,comp){
	compScore++;
	compScoreElem.innerHTML=compScore;
	resultElem.innerHTML=comp+" beats "+user+" You Lose."
	resultImageElem.src = "imgs/"+user+comp+".gif";

}
function tie(user,comp){
	resultElem.innerHTML="tie";
	resultImageElem.src = "imgs/"+user+comp+".png";

}

function main() {
    rockElem.addEventListener('click', function() {
    	setTimeout(change_result,500,"Rock");
		setTimeout(change_result,1000,"Paper");
		setTimeout(change_result,1500,"Scissors");
        setTimeout(game,2000,"r");
    })
    paperElem.addEventListener('click', function() {
    	setTimeout(change_result,500,"Rock");
		setTimeout(change_result,1000,"Paper");
		setTimeout(change_result,1500,"Scissors");
        setTimeout(game,2000,"p");
    })
    scissorsElem.addEventListener('click', function() {
    	setTimeout(change_result,500,"Rock");
		setTimeout(change_result,1000,"Paper");
		setTimeout(change_result,1500,"Scissors");
        setTimeout(game,2000,"s");
    })
}

main();
