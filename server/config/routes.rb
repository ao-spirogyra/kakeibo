Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/api/expenses/details' => 'api/expense_details#index'
  get '/api/expenses' => 'api/expenses#index'
  post '/api/expenses' => 'api/expenses#create'
end
