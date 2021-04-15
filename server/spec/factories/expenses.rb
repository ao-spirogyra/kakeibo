FactoryBot.define do
  factory :expense do
    expense_date_id { 0 }
    expense_type_id { 0 }
    value { 1000 }
  end
end
