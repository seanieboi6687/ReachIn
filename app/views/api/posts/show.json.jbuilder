json.post do
    json.extract! @post, :id, :body, :author_id, :created_at    
end
