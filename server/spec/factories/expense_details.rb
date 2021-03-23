FactoryBot.define do
  factory :expense_detail do
    sequence(:thing) { |n| "TEST_NAME#{n}"}
    sequence(:price) { 1000 }
  end
end