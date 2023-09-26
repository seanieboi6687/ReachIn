json.comments do 
    json.array! @comments do |comment|
    json.extract! comment, :id, :content, :created_at
    json.commenter do
        json.id comment.commenter.id
        json.firstName comment.commenter.first_name
        json.lastName comment.commenter.last_name
    end
end