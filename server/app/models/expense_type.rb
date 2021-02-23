class ExpenseType < ApplicationRecord
  has_many :expenses
  self.inheritance_column = :_type_disabled
  validates :type, presence: true, uniqueness: true
end
