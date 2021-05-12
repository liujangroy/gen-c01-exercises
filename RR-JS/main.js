//npm install prompt-sync
//npm install terminal-kit
const prompt = require('prompt-sync')({sigint: true});
const term = require( 'terminal-kit' ).terminal ;

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field, randomStart, hardMode=false) {
    this._field = field;
    this._randomStart = randomStart;
    this.hardMode = hardMode;
    if(this._randomStart){
        do{
            this.xPos = Math.floor(Math.random() * field[0].length);
            this.yPos = Math.floor(Math.random() * field.length);
        } while(this._field[this.yPos][this.xPos] === hat)
    }
    else{
        this.xPos = 0;
        this.yPos = 0;
    }
    this._field[this.y][this.x] = pathCharacter;
}
print() {
  for(let yPos=0; yPos<this._field.length; yPos++) {
    for(let xPos=0; xPos<this._field[0].length; xPos++) {
      if(yPos === this.yPos && xPos === this.xPos)
        term.green(pathCharacter);
      else if (this._field[yPos][xPos] === pathCharacter)
        term.blue(pathCharacter);
      else if (this._field[yPos][xPos] === fieldCharacter)
        term.blue(fieldCharacter); 
      else if(this._field[yPos][xPos] === hole)
        term.red(hole);
      else  
        term.noFormat(hat);
    }
    console.log("");
  }
}
isOutOfBounds() {
  return(this.xPos === -1 || this.xPos === this._field[0].length ||
         this.yPos === -1 || this.yPos === this._field.length );
}

getHat() {
  return this._field[this.yPos][this.xPos] === hat;
}

fallHole() {
  return this._field[this.yPos][this.xPos] === hole;
}

askQuestion() {
  const userInput = prompt("Which Direction you want to go? Please Enter W, S, A or D" ).toUpperCase();
  switch (userInput) {
    case 'W':
      this.yPos--;
      break;

    case 'S':
      this.yPos++;
      break;

    case 'A':
      this.xPos--;
      break;

    case 'D':
      this.xPos++;
      break;
    default:
      this.askQuestion();
      break;
  }
}






}


   
        
      
      
      

  




