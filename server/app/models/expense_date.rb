class ExpenseDate < ApplicationRecord
  has_many :expenses
  has_many :expense_types, through: :expenses
  validates :date, presence: true
end