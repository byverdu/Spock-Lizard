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

	if(window.location.reload && window.location.href.split('9292').pop() === '/game'){

		var game, player, opponent, img_pick, player_img, opponent_img;

		name   = JSON.parse(sessionStorage.getItem('name'));

		player   = new Player(name);

		opponent = new Player('Albert');

		game     = new Game(player,opponent);
		
		$('form:last button').click(function(){

			img_pick = $(this).attr('value')

			player.picks(img_pick)
			opponent.picks(game.randomPick())

			player_img   = $('<img class="img_reult" src="images/'+player.pick+'.png">')
			opponent_img = $('<img class="img_reult" src="images/'+opponent.pick+'.png">')

			game.winner()

			message = game.displayMessage();

			arr = message.split(' ');

			var index_player   = arr.indexOf(player.pick)
			var index_opponent = arr.indexOf(opponent.pick)

			arr[index_player]   = player_img
			arr[index_opponent] = opponent_img

			console.log(player_img)

			sessionStorage.setItem('message', arr);
			// sessionStorage.setItem('player', JSON.stringify(player.pick));
			// sessionStorage.setItem('opponent', JSON.stringify(opponent.pick));

			console.log(message)

			console.log('server',player.pick)

			//result = message.split(' ')

			console.log(arr)

		})
	}

	if (window.location.reload && window.location.href.split('9292').pop() === '/result') {

			var message, player, render_result;

			message = sessionStorage.getItem('message');
			//player = JSON.parse(sessionStorage.getItem('player'));

			render_result = $('#target');

			render_result.text(message)

			//render_result.append()

			//console.log('client',player)

			console.log(message)

	};

	
});
