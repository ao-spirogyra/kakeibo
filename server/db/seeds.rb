# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ExpenseDetail.create(type: 'aaa', thing: 'aaa', price: 1000, payed_at:"2021-03-12 23:00:02 +0000")
Expense.create(type: 'aaa', payed_at: "2021-03-12 23:00:02 +0000", price: 1000)