# == Schema Information
#
# Table name: pollishes
#
#  id         :integer          not null, primary key
#  group_id   :integer          not null
#  live       :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Pollish < ActiveRecord::Base
  validates :group, presence: true

  belongs_to :group
  has_many :questions
end
