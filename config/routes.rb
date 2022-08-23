Rails.application.routes.draw do
  resources :companies
  resources :favorites
  resources :makeups
  #get '/makeups', to: "makeups#get_makeups"
  # get '/brand', to: "makeups#get_brand"
  # get '/product_type', to: "makeups#get_product_type"
  # get '/prod_brand', to: "makeups#get_prod_brand"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
