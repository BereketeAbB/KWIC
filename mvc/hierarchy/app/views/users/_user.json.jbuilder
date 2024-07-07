json.extract! user, :id, :name, :title, :user_id, :created_at, :updated_at
json.url user_url(user, format: :json)
