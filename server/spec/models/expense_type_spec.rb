require 'rails_helper'
RSpec.describe ExpenseType, type: :model do
  describe 'presence' do
    describe 'type' do
      let(:expense_type) {build(:expense_type, type: '')}
      it 'must be present' do
        expect(expense_type.valid?).to eq(false)
      end
    end
  end
end