    json.user do
        json.extract! @user, :id, :first_name, :last_name, :gender, :email, :created_at
    end