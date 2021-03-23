class ExpenseType < ApplicationRecord
  has_many :expenses
  has_many :expense_dates, through: :expenses
  self.inheritance_column = :_type_disabled
  validates :type, presence: true
end
