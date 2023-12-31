Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:show, :create, :destroy]
    resources :posts, only: [:create, :destroy, :index, :update]
    resources :comments, only: [:index, :create, :update, :destroy]
    resources :likes, only: [:index, :create, :destroy]
  end

  get '*path', to: "static_pages#frontend_index"
end
