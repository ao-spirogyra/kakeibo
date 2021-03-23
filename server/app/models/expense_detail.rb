class ExpenseDetail < ApplicationRecord
  validates :thing, presence: true
  validates :price, presence: true, numericality: true
  belongs_to :expense, optional: true
end
