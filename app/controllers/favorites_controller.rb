class FavoritesController < ApplicationController
    def show
        favorites = Favorite.find(params[:id])
        render json: favorites
    end
    def index
        favorites = Favorite.all
        favemap = favorites.map do |fave|
            favehash = {
                fave_id: fave.id, 
                makeup_id: fave.makeup.id, 
                company_id: fave.company.id, 
                brand: fave.makeup.brand,
                name: fave.makeup.name,
                price: fave.makeup.price,
                image_link: fave.makeup.image_link,
                description: fave.makeup.description,
                rating: fave.makeup.rating,
                category: fave.makeup.category,
                product_type: fave.makeup.product_type
            }
            # fave.makeup # 
            # Makeup.find_by(id: fave.id)
            favehash
        end
        render json: favemap
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
        puts params[:id]
        favorites = Favorite.find_by(makeup_id: params[:id])
        puts favorites
        favorites.destroy
        render json: favorites
    end
end
