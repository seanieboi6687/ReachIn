json.posts do
    @posts.each do |post|
        json.set! post.id do
            json.extract! post, :id, :body, :author_id, :created_at
            # debugger
            json.photoUrl post.photo.attached? ? url_for(post.photo) : nil
        end
    end
end

json.authors do
    @posts.each do |post|
        json.set! post.author_id do
            json.extract! post.author, :id, :email, :phone_number, :first_name, :last_name, :bio, :gender
            # json.photoUrl post.photo.attached? ? url_for(post.photo) : nil
        end
    end
end