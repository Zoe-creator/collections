class Like < ApplicationRecord
  belongs_to :user 
  belongs_to :post 

  # validates :user_id, presence: true, uniqueness: true

end
