feature "Before starting the game" do

	scenario "Visiting the Homepage" do

		visit '/'

		expect(page).to have_content('Spock & Lizard')
		expect(page).to have_field('Enter your name')
	end

	scenario "after submitting a name" do
		visit '/'

		click_button('Go!!')

		expect(current_path).to eq('/game')
	end

	scenario "on the game page" do
		visit '/game'

		expect(page).to have_selector('img')
	end
end

feature "During the game" do

	scenario "You are able to pick" do

		visit '/game'

		expect(page).to have_button('spock')
	end

	scenario "After selecting a pick you will see the result in a new page" do

		visit '/game'

		click_button("spock")

		expect(current_path).to eq('/result')
	end


	scenario "You can play again" do
		visit 'result'

		click_button('Play again?')

		expect(current_path).to eq('/game')
	end


	scenario "You can start as a new  player" do
		visit 'result'

		click_button('New Player?')

		expect(current_path).to eq('/')
	end
end