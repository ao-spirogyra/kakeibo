require 'rails_helper'
RSpec.describe Expense, type: :model do
  describe 'presence' do
    describe 'thing' do
      let(:expense) { build(:expense, thing: '') }
      it 'must be present' do
        expect(expense.valid?).to eq(false)
      end
    end
    describe 'price' do
      let(:expense) { build(:expense, price: '') }
      it 'must be present' do
        expect(expense.valid?).to eq(false)
      end
    end
    describe 'payed_at' do
      let(:expense) { build(:expense, payed_at: '') }
      it 'must be present' do
        expect(expense.valid?).to eq(false)
      end
    end
  end
  describe 'format' do
    describe 'price' do
      let(:expense) { build(:expense, price: 'aaaaaaaaa') }
      it 'must be a number' do
        expect(expense.valid?).to eq(false)
      end
    end
  end
end