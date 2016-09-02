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

  belongs_to :group,
    inverse_of: :pollishes

  has_many :questions,
    inverse_of: :pollish,
    dependent: :destroy

  has_many :answers,
    through: :questions

  has_one :user,
    through: :group

  accepts_nested_attributes_for :questions
end
