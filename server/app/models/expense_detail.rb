class ExpenseDetail < ApplicationRecord
  validates :thing, presence: true
  validates :price, presence: true, numericality: true
  validates :payed_at, presence: true
  self.inheritance_column = :_type_disabled
  validates :type, presence: true, uniqueness: true
  belongs_to :expense
end
