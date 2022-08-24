class CompaniesController < ApplicationController
    def show
        companies = Company.find(params[:id])
        render json: companies
    end
    def index
        companies = Company.all
        render json: companies
    end
    def create
        companies = Company.create!(
            name: params[:name]
            )
        render json: companies
    end
    def update
        companies = Company.find(params[:id])
        companies.update!(
            name: params[:name]
            )
            redirect_to companies_path
    end
    def destroy
        companies = Company.find(params[:id])
        companies.destroy
        render json: companies
    end
end
