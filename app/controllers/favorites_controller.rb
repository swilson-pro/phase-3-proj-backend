class FavoritesController < ApplicationController
    def show
        favorites = Favorite.find(params[:id])
        render json: favorites
    end
    def index
        favorites = Favorite.all
        render json: favorites
    end

    def create
        
        favorites = Favorite.create!(
            makeup_id: params[:makeup_id],
            company_id: params[:company_id]
            )
        render json: favorites
    end

    def update
        favorites = Favorite.find(params[:id])
        favorites.update!(
            makeup_id: params[:makeup_id],
            company_id: params[:company_id]
            )
            redirect_to favorites_path
    end
    def destroy
        favorites = Favorite.find(params[:id])
        favorites.destroy
        render json: favorites
    end
end
