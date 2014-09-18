function Player(name) {
  this.name = name;
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

// rock:     { scissors: 'crushes', lizard: 'squashes' },
//   paper:    { rock: 'covers', spock: 'disproves' },
//   scissors: { paper: 'cuts', lizard: 'decapitates' },
//   lizard:   { spock: 'poisons', paper: 'eats' },
//   spock:    { rock: 'vaporises', scissors: 'smashes' }

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

// Determine who is the winner

Game.prototype._isWinner = function(pick,opponent_pick) {
	
	pick          = this.player1.pick;
	opponent_pick = this.player2.pick;
	
	return this.PAIRS[pick][opponent_pick]
}

// Comparing same pick

Game.prototype._isSamePick = function() {

	return this.player1.pick === this.player2.pick;
}


// Displaying message

Game.prototype.displayMessage = function(pick,opponent_pick) {

	var message = '' , verb;

	pick          = this.player1.pick
	opponent_pick = this.player2.pick

	console.log('server--pick-->',pick,'op_pic-->',opponent_pick)

	verb = this.PAIRS[pick][opponent_pick]

	console.log(verb,pick,'opponent_pick',opponent_pick)

	if (this.winner()){

		message += 'The '+pick+' '+this.player1.name+' '+verb+' the '+opponent_pick+' '+this.player2.name
	
	} else message += 'Draws'

	return message 
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



