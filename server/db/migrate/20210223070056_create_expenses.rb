class CreateExpenses < ActiveRecord::Migration[6.1]
  def change
    create_table :expense_dates do |t|
      t.string :date
      t.timestamps
    end
    
    create_table :expense_types do |t|
      t.string :type
      t.timestamps
    end

    create_table :expenses do |t|
      t.integer :value
      t.references :expense_type, foreign_key: true
      t.references :expense_date, foreign_key: true
      t.timestamps
    end

    create_table :expense_details do |t|
      t.string :thing
      t.integer :price
      t.references :expense, foreign_key: true
      t.timestamps
    end
  end
end
