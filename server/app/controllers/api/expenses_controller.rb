class Api::ExpensesController < ApplicationController
  def index
    expenses = Expense.all
    res = []
    expenses.map do |expense|
      hash = {}
      hash['id'] = expense.id
      hash['value'] = expense.value
      hash['payed_at'] = ExpenseDate.find(expense.expense_date_id).date
      hash['type'] = ExpenseType.find(expense.expense_type_id).type
      res.append(hash)
    end
    render json: res
  end
end
