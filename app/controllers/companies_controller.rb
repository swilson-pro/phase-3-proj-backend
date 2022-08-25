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

    def login
        # in every single request, there exists the params hash
        company = Company.find_by!(name: params[:name])
        if company && company.password_digest == params[:password]
          render json: company, status: :ok
        else
          render json: {error: 'Invalid Company passowrd'}, status: 404
        end
    
        def forgot_password
          company = Company.find_by!(name: params[:name])
          render json: {password: company.password_digest}, status: :ok
        end
      end
end
