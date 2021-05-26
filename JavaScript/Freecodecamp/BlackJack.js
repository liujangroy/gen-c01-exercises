//Wrong example
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch(caseInSwitch) {
  case "1":
  console.log(caseInSwitch(alpha));
  break;
  case "2":
  console.log(caseInSwitch(beta));
  break;
  case "3":
  console.log(caseInSwitch(gamma));
  break;
  case "4":
  console.log(caseInSwitch(delta));
  break;

  }
  // Only change code above this line
  return answer;
}
//Wrong Example


function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
       defaultStatement;
      break;
    };  
    return answer
}

// Change this value to test
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  
  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  
  // Only change code above this line  
  return answer;  
}

var count = 0;

function cc(card) {
  // Only change code below this line
switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count++;
  break;

  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
  count--;
  break;
}
  var holdbet = 'Hold'
  if (count > 0) {
    holdbet = 'Bet'
  }
  return count + '' +holdbet;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
 console.log(currentCard);
}