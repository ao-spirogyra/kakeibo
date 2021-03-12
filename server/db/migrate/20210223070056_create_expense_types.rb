class CreateExpenseTypes < ActiveRecord::Migration[6.1]
  def change
    create_table :expense_details do |t|
      t.belongs_to :expenses
      t.string :type
      t.string :thing
      t.integer :price
      t.datetime :payed_at
      t.timestamps
    end
    create_table :expenses do |t|
      t.string :payed_at
      t.integer :price
      t.string :type

      t.timestamps
    end
  end
end
