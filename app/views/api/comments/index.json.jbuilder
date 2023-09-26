json.comments do 
    @comments.each do |comment|
        json.extract! comment, :id, :content, :commenter_id, :post_id
    end
end