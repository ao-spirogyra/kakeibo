class CreateExpenseTypes < ActiveRecord::Migration[6.1]
  def change
    create_table :expenses do |t|
      t.string :type
      t.string :thing
      t.integer :price
      t.datetime :payed_at
      t.timestamps
    end
  end
end
