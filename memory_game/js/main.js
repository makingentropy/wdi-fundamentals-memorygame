//main.js
//ctrl+shift+j to open console in chrome, win7
//console.log("Up and running!");

var cards=[
	{
		rank: "queen",
		suit:"hearts",
		cardImage:"images/queen-of-hearts.png"
	},
	{
		rank:"queen",
		suit:"diamonds",
		cardImage:"images/queen-of-diamonds.png"
	},
	{
		rank:"king",
		suit:"hearts",
		cardImage:	"images/king-of-hearts.png"
	},
	{
		rank:"king",
		suit:"diamonds",
		cardImage:"images/king-of-diamonds.png"
	}
	];
var cardsInPlay=[];
var checkForMatch=function(){
	if(cardsInPlay[0]===cardsInPlay[1]){
			//alert("Sorry, try again.");
			console.log("You found a match!");
		}
	else{
			//alert("Sorry, try again.");
			console.log("Sorry, try again.");
			//the assignment says move this code here,
			//but shows it as being a console.log() call
			//rather than the alert it was previously. 
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
	console.log("User flipped "+cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	if(cardsInPlay.length===2){
		checkForMatch();
	}
};

flipCard(0);
flipCard(2);