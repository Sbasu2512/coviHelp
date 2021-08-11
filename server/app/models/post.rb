class Post < ApplicationRecord
  belongs_to :symptom, optional: true
  belongs_to :user, optional: true
  has_many :likes, dependent: :delete_all
end
