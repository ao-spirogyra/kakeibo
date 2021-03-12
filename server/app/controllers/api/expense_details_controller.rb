class Api::ExpenseDetailsController < ApplicationController
  def index
    expense_details = ExpenseDetail.all
    render json: expense_details
  end
end
