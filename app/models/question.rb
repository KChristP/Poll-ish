# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  pollish_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ActiveRecord::Base
  validates :body, :pollish, presence: true

  belongs_to :pollish,
    inverse_of: :questions

  has_many :answers,
    inverse_of: :question,
    dependent: :destroy

  has_one :group,
    through: :pollish

  has_one :user,
    through: :group

    accepts_nested_attributes_for :answers
end
