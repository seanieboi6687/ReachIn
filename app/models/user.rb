# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  phone_number    :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  bio             :string
#  gender          :string           not null
#
class User < ApplicationRecord
    validates :email, uniqueness: true, length: { in: 6..255 }, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :session_token, presence: true, uniqueness: true
    validates :first_name, :last_name, :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :gender, inclusion: { in: ["Male", "Female", "Transgender", "Non-binary/non-conforming", "Prefer not to respond"], message: "Please select a gender" }

    has_secure_password

    before_validation :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user&.authenticate(password) ? user : nil
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end

    private

    def generate_session_token
        while true
            token = SecureRandom.urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
    end
end
