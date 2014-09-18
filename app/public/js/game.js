jQuery(document).ready(function($) {
	
	$('.head_logo').lettering()	

	$('.index button').hide()

	$('.index input').on('focus',  function() {

		$('.index button').show('slow')
	});

	

	$('.index button').on('click',function(){
	
		var data, name;

		data     = $(".index form").serialize();

		name     = data.split('=').pop();

		console.log('name-->',name)


		sessionStorage.setItem('name',  JSON.stringify(name))
		//sessionStorage.setItem('opponent',JSON.stringify(opponent))
		//sessionStorage.setItem('game',    JSON.stringify(game))
	})

	if(window.location.reload && window.location.href.split('9292').pop() === '/game'){

		var game, player, opponent;

		name   = JSON.parse(sessionStorage.getItem('name'));
		//opponent = JSON.parse(sessionStorage.getItem('opponent'))
		//game     = JSON.parse(sessionStorage.getItem('game'))

		player   = new Player(name);

		opponent = new Player('Albert');

		game     = new Game(player,opponent);
		
		$('form:last button').click(function(){

			var img_pick = '';

			img_pick += $(this).attr('value')

			

			player.picks(img_pick)
			opponent.picks(game.randomPick())

			game.winner()

			console.log('game--pick-->',img_pick,'op_pic-->',opponent.pick)

			message = game.displayMessage();

			sessionStorage.setItem('message', JSON.stringify(message))

			
			console.log(game.winner())

			//console.log(game.displayMessage())

		})
	}

	if (window.location.reload && window.location.href.split('9292').pop() === '/result') {


			message = JSON.parse(sessionStorage.getItem('message'));

			$('#target').text(message)
	};

	
});


// $("#submit_button").click(function() {
//     var data = $("#my_form").serialize();
//     data += data.length ? "&" : ""; // check if empty
//     data += escape($(this).attr("name"))+"="+escape($(this).val());
//     // ...
//     return false;
// });