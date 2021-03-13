class Api::ExpensesController < ApplicationController
  def index
    expenses = Expense.all
    render json: expenses
  end
  def create
    @expense = Expense.create(type: params[:type], payed_at: params[:payed_at], price: params[:price])
  end
end
