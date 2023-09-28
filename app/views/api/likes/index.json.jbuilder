json.likes do 
    @likes.each do |like|
        json.extract! like, :id, :liker_id, :post_id
    end
end