class Expense < ApplicationRecord
  validates :thing, presence: true
  validates :price, presence: true, numericality: true
  validates :payed_at, presence: true
end
