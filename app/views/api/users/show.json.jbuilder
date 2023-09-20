    json.user do
        json.extract! @user, :id, ,:firstName, :lastName, :gender, :email, :created_at
    end