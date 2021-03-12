FactoryBot.define do
  factory :expense_detail do
    sequence(:thing) { |n| "TEST_NAME#{n}"}
    sequence(:price) { 1000 }
    sequence(:payed_at) { Time.now }
    sequence(:type) { |n| "TEST_NAME#{n}"}
  end
end