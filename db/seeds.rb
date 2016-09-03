# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create!(email: "MasterPollster@poll-ish.com", password: "password")
Group.create!(user_id: 1, name: "Ice Breakers")
Pollish.create!(group_id: 1)
Question.create!(body: "Which came first... the chicken or the egg?", pollish_id: 1)
Answer.create!(body: "Chicken", question_id: 1, votes: 1)
Answer.create!(body: "Egg", question_id: 1, votes: 999)
Pollish.create!(group_id: 1)
Question.create!(body: "Which would you prefer — three wishes five years from now or one wish right now?", pollish_id: 2)
Answer.create!(body: "3 wishes in 5 years", question_id: 2, votes: 12)
Answer.create!(body: "One wish right now", question_id: 2, votes: 25)
Answer.create!(body: "I wish to be... a Genie!", question_id: 2, votes: 3)



Group.create!(user_id: 1, name: "Customer Feedback")
Pollish.create!(group_id: 2)
Question.create!(body: "Which would you prefer?", pollish_id: 3)
Answer.create!(body: "Faster delivery", question_id: 3, votes: 18)
Answer.create!(body: "Improved products", question_id: 3, votes: 11)
Answer.create!(body: "Better customer service", question_id: 3, votes: 12)

Group.create!(user_id: 1, name: "Trivia")
Pollish.create!(group_id: 3)
Question.create!(body: "Nicolas Cage was not in which of these movies?", pollish_id: 4)
Answer.create!(body: "The Wicker Man", question_id: 4, votes: 18)
Answer.create!(body: "Windtalkers", question_id: 4, votes: 11)
Answer.create!(body: "Eternal Sunshine of the Spotless Mind", question_id: 4, votes: 11)
Answer.create!(body: "Adaptation", question_id: 4, votes: 12)

User.create!(email: "CharlesDarwin@evolution.com", password: "password")
Group.create!(user_id: 2, name: "Evolution")

User.create!(email: "AlbertEinstien@relativity.com", password: "password")
Group.create!(user_id: 3, name: "Physics")

User.create!(email: "RichardFeynman@particlephysics.com", password: "password")
Group.create!(user_id: 4, name: "Particle Physics")
