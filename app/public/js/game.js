jQuery(document).ready(function($) {
	
	$('.head_logo').lettering()	

	$('.index button').hide()

	$('.index input').on('focus',  function() {

		$('.index button').show('slow')
	});

	$('.index button').on('click',function(){
	
		var data, name;

		data  = $(".index form").serialize();

		name  = data.split('=').pop();
		
		sessionStorage.setItem('name',  JSON.stringify(name))
	})

	if(window.location.reload && window.location.href.split('/').pop() === 'game'){

		var game, player, opponent;

		name   = JSON.parse(sessionStorage.getItem('name'));

		player   = new Player(name);

		opponent = new Player('Devil');

		game     = new Game(player,opponent);
		
		$('form:last button').click(function(){

			var img_pick = $(this).attr('value')

			player.picks(img_pick)
			opponent.picks(game.randomPick())

			game.winner()

			message = game.displayMessage();

			sessionStorage.setItem('message', JSON.stringify(message));
			sessionStorage.setItem('player_pick',  player.pick);
			sessionStorage.setItem('opponent_pick',opponent.pick );

		})
	}

	if (window.location.reload && window.location.href.split('/').pop() === 'result') {

			var message, player_pick, opponent_pick, arr, index_player, index_opponent, player_img, opponent_img;

			message = JSON.parse(sessionStorage.getItem('message'));

			player_pick   = sessionStorage.getItem('player_pick')
			opponent_pick = sessionStorage.getItem('opponent_pick')
			
			arr = message.split(' ');
			
			index_player   = arr.indexOf(player_pick)
			index_opponent = arr.indexOf(opponent_pick)

			player_img   = $('<img class="img_result" src="images/'+player_pick+'.jpg">'  )
			opponent_img = $('<img class="img_result" src="images/'+opponent_pick+'.jpg">')

			arr[index_player]   = player_img
			arr[index_opponent] = opponent_img

			$.each(arr, function(index) {

				if(typeof arr[index] === 'string' ) arr[index] = ' '+arr[index]+' '
			});

			$('#target').append(arr)
	};
});
