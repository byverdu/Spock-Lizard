describe("Rock-Paper-Scissors", function() {
  var player1, player2, game;

  beforeEach(function() {

    player1 = new Player('Albert');
    player2 = new Player('Marla');
    game    = new Game(player1, player2);

  });


  // Test unit for a random value for the computer

  it('Random pick for the computer', function() {
    var values = ['rock','scissors','paper','lizard','spock'];
    
    expect(values).toContain(game.randomPick());
  });


  // Unit test for winning and losing

  describe('winning and losing', function() {

  // Unit test for rock

    describe('rock', function() {

      describe('should beat', function() {

        it('scissors', function() {

          player1.picks('rock');
          player2.picks('scissors');
          expect(game.winner()).toBe(player1);

        });

        it('lizard', function() {
          
          player1.picks('rock');
          player2.picks('lizard');

          expect(game.winner()).toBe(player1);
        });
      });


      describe('should lose to', function() {

        it('paper', function() {

          player1.picks('rock');
          player2.picks('paper');
          expect(game.winner()).toBe(player2);

        });

        it('spock', function() {
          
          player1.picks('rock');
          player1.picks('spock');

          expect(game.winner()).toBe(player2);
        });
        
      });

    });

  // Unit test for paper

    describe('paper', function() {

      describe('should beat', function() {
        
        it('rock', function() {

          player1.picks('paper');
          player2.picks('rock');
          expect(game.winner()).toBe(player1);

        });

        it('spock', function() {
          
          player1.picks('paper');
          player2.picks('spock');

          expect(game.winner()).toBe(player1);
        });
      });


      describe('should lose to', function() {
        
        it('scissors', function() {

          player1.picks('paper');
          player2.picks('scissors');
          expect(game.winner()).toBe(player2);

        });

        it('lizard', function() {
          
          player1.picks('paper');
          player2.picks('lizard');

          expect(game.winner()).toBe(player2);
        });
      });
    });

  // Unit test for scissors

    describe('scissors', function() {

      describe('should beat', function() {
        
        it('paper', function() {

          player1.picks('scissors');
          player2.picks('paper');
          expect(game.winner()).toBe(player1);

        });

        it('lizard', function() {
          
          player1.picks('scissors');
          player2.picks('lizard');

          expect(game.winner()).toBe(player1);
        });
      });

      describe('should lose to', function() {
        
        it('rock', function() {

          player1.picks('scissors');
          player2.picks('rock');
          expect(game.winner()).toBe(player2);

        });

        it('spock', function() {
          
          player1.picks('scissors');
          player2.picks('spock');

          expect(game.winner()).toBe(player2);
        });
      });
    });

  // Unit test for lizard

    describe('lizard', function() {

      describe('should beat', function() {
        
        it('paper', function() {
          
          player1.picks('lizard');
          player2.picks('paper');

          expect(game.winner()).toBe(player1)
        });

        it('spock', function() {
          
          player1.picks('lizard');
          player2.picks('spock');

          expect(game.winner()).toBe(player1);
        });
      });

      describe('should lose to', function() {
             
        it('scissors', function() {
          
          player1.picks('lizard');
          player2.picks('scissors');

          expect(game.winner()).toBe(player2)
        });

        it('rock', function() {
          
          player1.picks('lizard');
          player2.picks('rock');

          expect(game.winner()).toBe(player2);
        });
      });     
    });


  // Unit test for spock

    describe('spock', function() {

      describe('should beat', function() {
        
        it('rock', function() {
          
          player1.picks('spock');
          player2.picks('rock');

          expect(game.winner()).toBe(player1);
        });

        it('scissors', function() {
          
          player1.picks('spock');
          player2.picks('scissors');

          expect(game.winner()).toBe(player1);
        });
      });

      describe('should lose to', function() {
        
        it('paper', function() {
          
          player1.picks('spock');
          player2.picks('paper');

          expect(game.winner()).toBe(player2);
        });

        it('lizard', function() {
          
          player1.picks('spock');
          player1.picks('lizard');

          expect(game.winner()).toBe(player2);
        });
      });
      

    });

  });

  // Test for victory messages

  describe('messages to be displayed', function() {
    
    it("should return the winner's name with his pick, the verb and the loser's name with his pick", function() {
      pick_1 = player1.picks('lizard');
      pick_2 = player2.picks('spock');
      
      player1.picks('lizard');
      player2.picks('spock');
      expect(game.displayMessage()).toEqual('The lizard Albert poisons the spock Marla');
    });
  }); 

  // Test unit for Draws

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {

        var drawGameResults = ['rock', 'paper', 'scissors', 'lizard', 'spock'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });

        expect(drawGameResults).toEqual([null, null, null, null, null]);

      });

    });

  });


});




