# == Schema Information
#
# Table name: groups
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Group < ActiveRecord::Base
  validates :name, :user, presence: true

  belongs_to :user
  has_many :pollishes,
    foreign_key: :pollish_id,
    primary_key: :id,
    class_name: :Pollish

end
