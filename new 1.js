/* nim simple by Andrew */

/*global variables */
var games =0;
var again=true;
var count=0;
var turns=0;
var next=games%2;
var turn=0;
/* main */
while(again==true){
	 count=0;
	 turns=0;
	 next=games%2;
	while(count<=21){
		if(next==0){
			turn=cpuTurn();
		}
		else if (next==1){
		turn=userTurn();
		}
		count+=turn;
		alert("current count is "+count);
	next=nextSwitch(next);
		}
		
	games++;
}
/* functions */
function userTurn(){
	var	userInput=0;
	userInput=prompt("enter number 1-3");
	return userInput;
}
function cpuTurn(){
	turn=Math.floor(Math.random()*3)+1;
	alert("computer counts "+turn);
	return turn;
	}
	
function playAgain(){
	playAgain=prompt("play again? y for yes");
	if(playAgain=="y"){
		return true;
	}
	else{
		alert("goodbye");
		break;
	}
}
function declareWinner(){
	if(next==0){
		alert("you lose");
	}
	else alert("you win");
}
function nextSwitch(next){
	if (next==1){
		return 0;
	}
	else if(next==0){
		return 1;
	}
}