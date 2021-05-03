const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
      } else {
        console.log('Error, please type:rock, paper or scissors.');
      }
      }
  
  
     const getComputerChoice = () => {
       const randomNumber = (Math.floor(Math.random()*3));
       switch (randomNumber) {
         case 0:
         return 'Rock';
         case 1:
         return 'paper';
         case 2:
         return 'scissors';
       }
     };
  
  console.log(getComputerChoice());
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'This game is a lie'; 
    }
    if (userChoice === 'bomb') {
      return 'Congratulation! You won!'; 
    }

    if (userChoice ==='rock') {
      if (computerChoice === 'paper') {
        return 'Sorry, computer won!';
      } else {
        return 'Congratulation! You won!' ;
      }
    }

    if (userChoice ==='paper') {
      if (computerChoice === 'scissors') {
        return 'Sorry, computer won!';
      } else {
        return 'Congratulation! You won!' ;
      }
    }

    if(userChoice === 'scissors') {
      if (computerChoice === 'rock') {
      return 'Sorry, computer won!' ;
    } else {
      return 'Congratulation! You won!.' ;
    }
    } 
  }
   



      const playGame = () => {
        const userChoice = getUserChoice('paper');
        const computerChoice = getComputerChoice('');
       console.log('You threw: ' + userChoice);
        console.log('The computer threw:' + computerChoice);
        console.log(determineWinner(userChoice, computerChoice));
      }; 

    playGame();