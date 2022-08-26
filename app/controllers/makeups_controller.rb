class MakeupsController < ApplicationController
    def index
        if params[:product_type].present? && params[:brand].present?
            makeups = Makeup.where(product_type: params[:product_type], brand: params[:brand]).page params[:page]
        elsif params[:product_type].present? && params[:brand].nil?
            makeups = Makeup.where(product_type: params[:product_type]).page params[:page]
        elsif  params[:product_type].nil? && params[:brand].present?
            makeups = Makeup.where(brand: params[:brand]).page params[:page]
        else
            makeups = Makeup.all.page params[:page]
        end
        render json: makeups
    end

    def show
        makeups = Makeup.find(params[:id])
        render json: makeups
    end

    # def show_my_products
    #     makeups = Makeup.where(brand: company.name)
    #     render json: makeups
    # end

    def create
        makeups = Makeup.create!(
            brand: params[:brand],
            name: params[:name],
            price: params[:price],
            image_link: params[:image_link],
            description: params[:description],
            rating: params[:rating],
            category: params[:category],
            product_type: params[:product_type],
            company_id: params[:company_id]
            )
        render json: makeups
    end
    
    # def makeup_params
    #     params.permit(:brand, :name, :price, :image_link, :description, :rating, :category, :product_type, :company_id)
    # end
    
    def update
        makeups = Makeup.find(params[:id])
        makeups.update( brand: params[:brand],
            name: params[:name],
            price: params[:price],
            image_link: params[:image_link],
            description: params[:description],
            rating: params[:rating],
            category: params[:category],
            product_type: params[:product_type],
            company_id: params[:company_id]
            )
            redirect_to makeups_path
    end

    def get_product_types
        product_types_array = Makeup.all.pluck(:product_type).uniq
        render json: product_types_array
    end

    def destroy
        makeups = Makeup.find(params[:id])
        makeups.destroy
        render json: makeups
    end
    def get_brand
        makeups = Makeup.where(brand: params[:brand])
        render json: makeups # run http://localhost:4000/brand?brand=colourpop
    end

end




# require 'rest-client'
    
    # def get_prod_brand
    #     makeups = Makeup.where(product_type: params[:product_type], brand: params[:brand])
    #     render json: makeups # like this: http://localhost:4000/prod_brand?product_type=lipstick&brand=maybelline
    # end
    # def get_product_type
    #     makeups = Makeup.where(product_type: params[:product_type])
    #     render json: makeups
    # end

    # def get_makeups
    #     makeups = Makeup.all
    #     render json: makeups
    # end

