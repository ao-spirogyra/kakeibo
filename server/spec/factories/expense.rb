FactoryBot.define do
  factory :expense do
    sequence(:type) { |n| "TEST_NAME#{n}"}
  end
end