Rails.application.routes.draw do
  resources :likes
  resources :posts
  resources :comments 
  resources :profiles
  resources :users
  post '/auth/login', to: 'auth#login'
  get '/auth/verify', to: 'auth#verify'
  
  
  
#   resources :users do
#     resources :likes
# end

# resources :users do
#   resources :posts do
#     resources :comments
#   end
# end

#     resources :posts do
#       resources :comments
#   end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
