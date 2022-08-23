Rails.application.routes.draw do

  root "makeups#index"

  get '/makeups/:id', to: 'makeups#show'
  get '/makeups', to: 'makeups#index'
  post '/makeups', to: 'makeups#create'
  patch 'makeups/:id', to: 'makeups#update'
  delete 'makeups/:id', to: 'makeups#destroy'
  get '/brand', to: "makeups#get_brand" # http://localhost:4000/makeups?brand=maybelline
  get '/product_type', to: "makeups#get_product_type" # http://localhost:4000/makeups?brand=maybelline&product_type=lipstick
  get '/prod_brand', to: "makeups#get_prod_brand"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
