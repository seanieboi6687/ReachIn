json.like do 
    json.extract! @like, :id, :liker_id, :post_id
end