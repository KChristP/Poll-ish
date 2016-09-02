Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:create, :destroy], defaults: {format: :json}
    resource :session, only: [:create, :destroy], defaults: {format: :json}
    resources :groups, only: [:create, :destroy, :index, :show, :edit], defaults: {format: :json}
    resources :pollishes, defaults: {format: :json}
  end

  root to: 'static_pages#root'
end
