const team = {
  _players: [
    { firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11,},
    {firstName: 'Kobe',
        lastName: 'Bryant',
        age: 13,},
    {firstName: 'David',
        lastName: 'Beckham',
        age: 15,},
  ],

  _games: [
{opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27},
  {opponent: 'Sharks',
  teamPoints: 30,
  opponentPoints: 17},
  {opponent: 'Hawks',
  teamPoints: 38,
  opponentPoints: 37},
  ],

  get games() {
    return this._games;
  },

  get players() {
    return this._players;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },

  addGame(opponentName, myPoints, oppPoints) {
    const game = {
      opponent: opponentName,
      teamPoints: myPoints,
      opponentPoints: oppPoints
    };
    this.games.push(game);
  }

}

team.addPlayer('Stephen', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players); 

team.addGame('Titans', 100, 98);
team.addGame('Hercules', 80, 68);
team.addGame('Giants', 50, 38);
console.log(team.games);