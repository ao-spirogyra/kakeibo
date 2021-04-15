require 'rails_helper'
RSpec.describe ExpenseDetail, type: :model do
  describe 'presence' do
    describe 'expense_type_id' do
      let(:expense) { build(:expense, expense_type_id: '') }
      it 'must be present' do
        expect(expense.valid?).to eq(false)
      end
    end

    describe 'expense_date_id' do
      let(:expense) { build(:expense, expense_date_id: '') }
      it 'must be present' do
        expect(expense.valid?).to eq(false)
      end
    end

    describe 'value' do
      let(:expense) { build(:expense, value: '') }
      it 'must be present' do
        expect(expense.valid?).to eq(false)
      end
    end
    
  end
end