/*Nim Simple By Max*/

/*global Variables */
var games = 0;
var again = true;
/* main */
if(again = true){
var count = 0;
var turns = 0;
var next = games % 2;
if(next == 0){
	turn = cpuTurn;
}
else turn =  pcTurn;
count+=turn;
if(count >= 21){
	declareWinner(next):
}

else{
	turns++;
}
prompt("want to play again? y for yes");
	if(prompt == "y"){
		return true;
	}
	else return false;
}
else return false
//Next Game Loop
while(again() == true){
	games++;
	return true;
}
else return false;
//Next turn
if(next == 0){
	var answer = Math.random(math.floor());
	turns = answer;
	return true;
}
/* Functions */
function nextSwitch(){
	if(next = 0){
		next = 1;
		return next
	}
	else next = 0;
}

function declareWinner(next){
	if(next == 0){
		alert("you lose!");
	}
	else alert("you win!");
}	
// CPU Turn
function cpuTurn(){
turn = Math.random{
if(turn > 0 && answer < 4){
			return true;
			turns++;
			return turn;
		}
}
//PC Turn

Function pcTurn(){
	prompt("pick a number 1-3!");
			if(prompt > 0 && answer < 4){
			return true;
			turns++;
			return prompt;
		}
	else return false;
























