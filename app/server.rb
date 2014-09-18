require 'sinatra/base'

class Lizard < Sinatra::Base

	enable :sessions

	configure do

		set :views,          Proc.new{ File.join(File.dirname(__FILE__), "views" ) }
		set :public_folder,  Proc.new{ File.join(File.dirname(__FILE__), 'public') }
	end

	get '/' do

		if session[:user]
			redirect to '/game'
		else
		 erb :index
		end
	end

	post '/' do
		
		session[:user] = params[:name]

		redirect to '/game'
	end

	get '/game' do
		@user = session[:user]

		erb :game
	end

	post '/result' do
		redirect to '/result'
	end

	get '/result' do

		erb :result
	end

	post '/new_game' do
		redirect to '/game'
	end

	post '/new_player' do
		session[:user] = nil
		redirect to '/'
	end
end