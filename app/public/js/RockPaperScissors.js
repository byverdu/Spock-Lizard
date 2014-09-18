

function Player(name) {
  this.name = name;
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.PAIRS = {rock:     { scissors: "crushes", lizard: "squashes"   },
											  paper:    { rock: "covers", spock: "disproves"     },
											  scissors: { paper: "cut", lizard: "decapitate"     },
											  lizard:   { spock: "poisons", paper: "eats"        },
											  spock:    { rock: "vaporizes", scissors: "smashes" }
												}	



// Picking 

Player.prototype.picks = function(pick) {
	this.pick = pick
};

Game.prototype._pickPlayer1 = function() {
	console.log('new',this.player1.pick)
	return this.player1.pick;
}

Game.prototype._pickPlayer2 = function() {
	console.log(this.player2.pick)
	return this.player2.pick;
}

// Determine who is the winner

Game.prototype._isWinner = function() {
	
	return this.PAIRS[this._pickPlayer1()][this._pickPlayer2()]
}

// Comparing same pick

Game.prototype._isSamePick = function() {

	return this._pickPlayer1() === this._pickPlayer2()
}


// Displaying message

Game.prototype.displayMessage = function() {

	var pick, opponent_pick;

	if(!this.winner()) return 'Draw'
	
	pick          = this.winner().pick
	opponent_pick = this.loser().pick

	verb = this.PAIRS[pick][opponent_pick]

	return 'The '+pick+' '+this.winner().name+' '+verb+' the '+opponent_pick+' '+this.loser().name

}


// Random pick for the computer

Game.prototype.randomPick = function() {

	var all_keys, rand_pick;

	all_keys   = Object.keys(this.PAIRS);

	rand_pick  = Math.floor(Math.random() * all_keys.length );

	return all_keys[rand_pick]
}


// Final result

Game.prototype.winner = function() {

	if(this._isSamePick()) return null;

	if(this._isWinner()) {

		return this.player1;
	
	}else return this.player2;
}

Game.prototype.loser = function() {
	return this.winner() == this.player1 ? this.player2 : this.player1;
}


