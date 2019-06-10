class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.integer :game_id
      t.string :name
      t.timestamps
    end
  end
end
