//main.js
//ctrl+shift+j to open console in chrome, win7
//console.log("Up and running!");

var cards=["queen", "queen","king","king"];
var cardsInPlay=[];
var checkForMatch=function(){
	if(cardsInPlay[0]===cardsInPlay[1]){
			console.log("You found a match!");
		}
		else{
			console.log("Sorry, try again.");
			//the assignment says move this code here,
			//but shows it as being a console.log() call
			//rather than the alert it had been. 
			//Therefore,
			//I changed it before moving it because
			//it appeared to be an implicit instruction.
			//However,
			//In the very next section, the Deliverable 
			//clearly pictures that an alert
			//is still being used instead.
			//It is unclear which one is the "correct"
			//deliverable because the exercise was
			//not carefully edited.
			//I am giving the console.log version
			//because it is less annoying.
		}
}
var flipCard=function(cardId){
	console.log("User flipped "+cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if(cardsInPlay.length===2){
		checkForMatch();
	}
};

flipCard(0);
flipCard(2);