class Expense < ApplicationRecord
  has_many :expense_details
  belongs_to :expense_type, optional: true
  belongs_to :expense_date, optional: true
  validates :expense_type_id, presence: true, numericality: true
  validates :expense_date_id, presence: true, numericality: true
  validates :value, presence: true, numericality: true
end
