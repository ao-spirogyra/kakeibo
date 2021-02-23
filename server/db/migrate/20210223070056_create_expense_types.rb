class CreateExpenseTypes < ActiveRecord::Migration[6.1]
  def change
    create_table :expense_types do |t|
      t.string :type
      t.timestamps
    
    create_table :expenses do |t|
      t.belongs_to :expense_type
      t.string :thing
      t.integer :price
      t.datetime :payed_at
      t.timestamps
    end
    
    end
  end
end
