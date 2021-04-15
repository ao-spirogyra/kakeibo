class Api::ExpenseDetailsController < ApplicationController
  def index
    expense_details = ExpenseDetail.all
    render json: expense_details
  end
  def show
    expense_details = ExpenseDetail.where(expense_id: params[:expense_id])
    response = expense_details.map do |expense_detail| {
      item: expense_detail.item,
      price: expense_detail.price,
      memo: expense_detail.memo
    } end
    render json: response
  end
end
