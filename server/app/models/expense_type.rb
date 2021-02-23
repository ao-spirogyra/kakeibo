class ExpenseType < ApplicationRecord
  has_many :expenses
  self.inheritance_column = :_type_disabled
end
