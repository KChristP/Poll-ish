# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  body        :string           not null
#  question_id :integer          not null
#  votes       :integer          default(0), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Answer < ActiveRecord::Base
  validates :body, :question, presence: true

  belongs_to :question,
    inverse_of: :answers
    
  has_one :pollish,
    through: :question

  has_one :group,
   through: :pollish

  has_one :user,
    through: :group
end
