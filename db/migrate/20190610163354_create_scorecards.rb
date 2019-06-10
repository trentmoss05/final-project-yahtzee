class CreateScorecards < ActiveRecord::Migration[5.2]
  def change
    create_table :scorecards do |t|
      t.integer :player_id
      t.integer :ones
      t.integer :twos
      t.integer :threes
      t.integer :fours
      t.integer :fives
      t.integer :sixes
      t.integer :bonus
      t.integer :upper_section
      t.integer :three_of_kind
      t.integer :four_of_kind
      t.integer :full_house
      t.integer :sm_straight
      t.integer :lg_straight
      t.integer :yahtzee
      t.integer :chance
      t.integer :lower_section
      t.integer :total
      t.timestamps
    end
  end
end
