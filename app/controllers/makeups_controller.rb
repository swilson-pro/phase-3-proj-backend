class MakeupsController < ApplicationController
    def index
        if params[:product_type].present? && params[:brand].present?
            makeups = Makeup.where(product_type: params[:product_type], brand: params[:brand])
        elsif params[:product_type].present? && params[:brand].nil?
            makeups = Makeup.where(product_type: params[:product_type])
        elsif  params[:product_type].nil? && params[:brand].present?
            makeups = Makeup.where(brand: params[:brand])
        else
            makeups = Makeup.all
        end

        render json: makeups
    end
end


require 'rest-client'
    # def create
    #     Makeup.create(
    #         image_link: params[:image_link]
    #         name: params[:name]
    #     )
    # end

    # def get_prod_brand
    #     makeups = Makeup.where(product_type: params[:product_type], brand: params[:brand])
    #     render json: makeups # like this: http://localhost:4000/prod_brand?product_type=lipstick&brand=maybelline
    # end
    # def get_product_type
    #     makeups = Makeup.where(product_type: params[:product_type])
    #     render json: makeups
    # end
    # def get_brand
    #     makeups = Makeup.where(brand: params[:brand])
    #     render json: makeups # run http://localhost:4000/brand?brand=colourpop
    # end
    # def get_makeups
    #     makeups = Makeup.all
    #     render json: makeups
    # end

