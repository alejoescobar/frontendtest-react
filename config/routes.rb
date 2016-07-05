Rails.application.routes.draw do

  get '/api' => 'application#index', defaults: { format: :json }
  root to: 'site#index'

end
