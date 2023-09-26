# == Schema Information
#
# Table name: comments
#
#  id            :bigint        not null, primary key
#  content       :text
#  commenter_id  :bigint        not null
#  post_id       :bigint        not null
#  created_at    :datetime      not null
#  updated_at    :datetime      not null
#
class Comment < ApplicationRecord
    validates_presence_of :commenter_id, :post_id

    belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post

    belongs_to :commenter,
    foreign_key: :commenter_id,
    class_name: :User
end
