require 'rails_helper'
RSpec.describe ExpenseDetail, type: :model do
  describe 'presence' do
    describe 'thing' do
      let(:expense_detail) { build(:expense_detail, thing: '') }
      it 'must be present' do
        expect(expense_detail.valid?).to eq(false)
      end
    end
    describe 'price' do
      let(:expense_detail) { build(:expense_detail, price: '') }
      it 'must be present' do
        expect(expense_detail.valid?).to eq(false)
      end
    end
    describe 'payed_at' do
      let(:expense_detail) { build(:expense_detail, payed_at: '') }
      it 'must be present' do
        expect(expense_detail.valid?).to eq(false)
      end
    end
    describe 'type' do
      let(:expense_detail) { build(:expense_detail, type: '') }
      it 'must be present' do
        expect(expense_detail.valid?).to eq(false)
      end
    end
  end
  describe 'format' do
    describe 'price' do
      let(:expense_detail) { build(:expense_detail, price: 'aaaaaaaaa') }
      it 'must be a number' do
        expect(expense_detail.valid?).to eq(false)
      end
    end
  end
  describe 'uniqueness' do
    describe 'type' do
      let(:expense_detail) { create(:expense_detail, type: 'test') }
      let(:dup_expense_detail) { expense_detail.dup }
      it 'must be unique' do
        expect(dup_expense_detail.valid?).to eq(false)  
      end
    end
  end
end