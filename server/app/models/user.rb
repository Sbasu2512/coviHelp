class User < ApplicationRecord
  has_many :posts
  has_many :surveys
  has_many :likes
end
