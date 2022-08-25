Rails.application.routes.draw do

  root "makeups#index"

  # MAKEUP ROUTES

  get '/makeups/:id', to: 'makeups#show'
  get '/makeups', to: 'makeups#index'
  post '/makeups', to: 'makeups#create'
  patch 'makeups/:id', to: 'makeups#update'
  delete 'makeups/:id', to: 'makeups#destroy'
  get '/brand', to: "makeups#get_brand" # http://localhost:4000/makeups?brand=maybelline
  get '/product_type', to: "makeups#get_product_type" # http://localhost:4000/makeups?brand=maybelline&product_type=lipstick
  # get '/prod_brand', to: "makeups#get_prod_brand"
  get '/show_product_types', to: "makeups#get_product_types"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # FAVORITES ROUTES
  get '/favorite/:id', to: 'favorites#show'
  get '/favorites', to: 'favorites#index'
  post '/favorites', to: 'favorites#create'
  patch '/favorites/:id', to: 'favorites#update'
  delete '/favorites/:id', to: 'favorites#destroy'


  # COMPANIES ROUTES
  get '/company/:id', to: 'companies#show'
  get '/companies', to: 'companies#index'
  post '/companies', to: 'companies#create'
  patch '/companies/:id', to: 'companies#update'
  delete '/companies/:id', to: 'companies#destroy'
  post '/login', to: 'companies#login'
  post '/forgot_password', to: 'companies#forgot_password'
end

