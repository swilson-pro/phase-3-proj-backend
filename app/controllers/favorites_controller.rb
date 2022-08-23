class FavoritesController < ApplicationController
    def show
        favorites = Favorite.find(params[:id])
        render json: favorites
    end
    def index
        favorites = Favorite.all
        render json: favorites
    end
end
