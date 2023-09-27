json.post do
    json.extract! @post, :id, :body, :author_id, :created_at
        json.photoUrl @post.photo.attached? ? url_for(@post.photo) : nil
end
