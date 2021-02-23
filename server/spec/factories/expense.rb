FactoryBot.define do
  factory :expense do
    sequence(:thing) { |n| "TEST_NAME#{n}"}
    sequence(:price) { 1000 }
    sequence(:payed_at) { Time.now }
  end
end