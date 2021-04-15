# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
type = ExpenseType.create!(type: 'aaa')
date = ExpenseDate.create!(date: Time.now)
expense = Expense.create!(value: 1000, expense_type_id: type.id, expense_date_id: date.id)
ExpenseDetail.create!(item: 'aaa', price: 1000, memo: 'memo', expense_id: expense.id)
