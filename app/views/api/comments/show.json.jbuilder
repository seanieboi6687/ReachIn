json.comment do
    json.extract! @comment, :id, :commenter_id, :post_id, :content, :created_at
end