FactoryBot.define do
  factory :expense_type do
    sequence(:type) { |n| "TEST_NAME#{n}"}
  end
end