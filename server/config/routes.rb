Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/api/expenses/detail/all' => 'api/expense_details#index'
  get '/api/expenses/detail' => 'api/expense_details#show'
  get '/api/expenses' => 'api/expenses#index'
  post '/api/expenses' => 'api/expenses#create'
end
