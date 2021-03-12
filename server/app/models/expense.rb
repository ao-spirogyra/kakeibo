class Expense < ApplicationRecord
  has_many :expense_details
  self.inheritance_column = :_type_disabled
end
