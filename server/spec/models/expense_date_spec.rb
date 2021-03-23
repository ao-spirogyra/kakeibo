require 'rails_helper'
RSpec.describe ExpenseDate, type: :model do
  describe 'presence' do
    describe 'type' do
      let(:expense_date) {build(:expense_date, date: '')}
      it 'must be present' do
        expect(expense_date.valid?).to eq(false)
      end
    end
  end
end