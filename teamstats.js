//declare const team
const team = {
  //adding two properties to your team object (_players and _games)
  _players: [
    // three properties:
    { firstName: 'Ray', lastName: 'Yao', age: 28 },
    { firstName: 'Josh', lastName: 'Wilcox', age: 30 },
    { firstName: 'Teja', lastName: 'Gotimukala', age: 25 },
  ],

  _games: [
    // three properties:
    { opponent: 'Fuel', teamPoints: 3, opponentPoints: 2 },
    { opponent: 'Dragons', teamPoints: 1, opponentPoints: 3 },
    { opponent: 'NYXL', teamPoints: 0, opponentPoints: 3 },
  ],

  get players() {
    //getter method called players to retrieve the _players property.
    return this._players
  },

  get games() {
    //getter method called players to retrieve the _games property.
    return this._games
  },

  addPlayer: function (firstName, lastName, age) {
    //create newPlayer object by set 3 params
    const newPlayer = { firstName: firstName, lastName: lastName, age: age }
    //add _players object  to the team‘s _players array.
    this._players.push(newPlayer)
  },

  addGame: function (opponentName, teamPoints, opponentPoints) {
    const newGame = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    }
    this._games.push(newGame)
  },
}

//team.addPlayer('Steph', 'Curry', 28);
//team.addPlayer('Lisa', 'Leslie', 44);
//team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Outlaws', 1, 3)
team.addGame('Gladiators', 3, 1)
team.addGame('Mayhem', 3, 0)

console.log(team.players)
console.log()
console.log(team.games)
