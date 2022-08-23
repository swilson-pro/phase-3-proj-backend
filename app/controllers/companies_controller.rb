class CompaniesController < ApplicationController
    def show
        companies = Company.find(params[:id])
        render json: companies
    end
    def index
        companies = Company.all
        render json: companies
    end
end
