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

json.comments do
    @posts.each do |post|
        post.comments.each do |comment|
            json.set! comment.id do
                json.extract! comment, :id, :content, :commenter_id, :post_id
            end
        end
    end
end