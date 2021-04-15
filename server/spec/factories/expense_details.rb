FactoryBot.define do
  factory :expense_detail do
    sequence(:item) { |n| "TEST_NAME#{n}"}
    sequence(:price) { 1000 }
    sequence(:memo) { 'memo' }
  end
end