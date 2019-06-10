class Player < ApplicationRecord
    has_one :scorecard
    belongs_to :game
end
