require 'rails_helper'
RSpec.describe ExpenseType, type: :model do
  describe 'presence' do
    let(:expense_type) { build(:expense_type, type: '') }
    it 'type must be present' do
      expect(expense_type.valid?).to eq(false)
    end
  end
  describe 'uniqueness' do
    let(:expense_type) { create(:expense_type, type: 'test') }
    let(:dup_type) { expense_type.dup }
    it 'type must be unique' do
      expect(dup_type.valid?).to eq(false)  
    end
  end
end