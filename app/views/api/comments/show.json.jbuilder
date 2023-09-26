json.comment do
    json.set! @comment.id do
        json.extract! @comment, :id, :content, :created_at, :updated_at
        json.commenter do
            json.id @comment.commenter.id
            json.firstName @comment.commenter.first_name
            json.lastName @comment.commenter.last_name
        end
    end
end