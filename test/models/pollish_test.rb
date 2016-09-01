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

require 'test_helper'

class PollishTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
