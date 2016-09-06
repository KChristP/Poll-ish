# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create!(email: "Guest@poll-ish.com", password: "password")
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


Group.create!(user_id: 1, name: "Social")
Pollish.create!(group_id: 4)
Question.create!(body: "What are your bad habits?", pollish_id: 5)
Answer.create!(body: "nose picking", question_id: 5, votes: 18)
Answer.create!(body: "nail biting", question_id: 5, votes: 28)
Answer.create!(body: "chewing with mouth open", question_id: 5, votes: 8)
Answer.create!(body: "swearing", question_id: 5, votes: 14)
Answer.create!(body: "cracking knuckles", question_id: 5, votes: 9)
Answer.create!(body: "fidgeting", question_id: 5, votes: 12)
Answer.create!(body: "bite inside of mouth", question_id: 5, votes: 2)
Answer.create!(body: "being lazy", question_id: 5, votes: 54)
Answer.create!(body: "staying up too late", question_id: 5, votes: 25)
Answer.create!(body: "eating unhealthily", question_id: 5, votes: 33)
Answer.create!(body: "procrastinating", question_id: 5, votes: 30)

Pollish.create!(group_id: 4)
Question.create!(body: "Zippers or Buttons: Which is better?", pollish_id: 6)
Answer.create!(body: "Zippers", question_id: 6, votes: 12)
Answer.create!(body: "Buttons", question_id: 6, votes: 10)
Answer.create!(body: "Not sure", question_id: 6, votes: 2)
Answer.create!(body: "No preference", question_id: 6, votes: 4)

Pollish.create!(group_id: 4)
Question.create!(body: "What are you stereotyped as?", pollish_id: 7)
Answer.create!(body: "Prep", question_id: 7, votes: 4)
Answer.create!(body: "Jock/Athlete", question_id: 7, votes: 12)
Answer.create!(body: "Emo", question_id: 7, votes: 12)
Answer.create!(body: "Nerd", question_id: 7, votes: 15)
Answer.create!(body: "Goth", question_id: 7, votes: 4)
Answer.create!(body: "Weirdo", question_id: 7, votes: 4)
Answer.create!(body: "Average", question_id: 7, votes: 10)

Pollish.create!(group_id: 4)
Question.create!(body: "What is your favorite social website?", pollish_id: 8)
Answer.create!(body: "Twitter", question_id: 8, votes: 24)
Answer.create!(body: "Facebook", question_id: 8, votes: 30)
Answer.create!(body: "Instagram", question_id: 8, votes: 21)
Answer.create!(body: "Ask.fm", question_id: 8, votes: 0)
Answer.create!(body: "Youtube", question_id: 8, votes: 22)
Answer.create!(body: "Tumblr", question_id: 8, votes: 10)
Answer.create!(body: "Myspace", question_id: 8, votes: 4)
Answer.create!(body: "Reddit", question_id: 8, votes: 13)
Answer.create!(body: "Other", question_id: 8, votes: 8)


Pollish.create!(group_id: 4)
Question.create!(body: "Who's your favorite world leader?", pollish_id: 9)
Answer.create!(body: "David Cameron", question_id: 9, votes: 5)
Answer.create!(body: "Barack Obama", question_id: 9, votes: 24)
Answer.create!(body: "Angela Merkel", question_id: 9, votes: 12)
Answer.create!(body: "Francois Hollande", question_id: 9, votes: 7)
Answer.create!(body: "Vladimir Putin", question_id: 9, votes: 15)
Answer.create!(body: "Shinzo Abe", question_id: 9, votes: 7)
Answer.create!(body: "Dilma Rousseff", question_id: 9, votes: 3)
Answer.create!(body: "Matteo Renzi", question_id: 9, votes: 2)




User.create!(email: "CharlesDarwin@evolution.com", password: "password")
Group.create!(user_id: 2, name: "Evolution")

User.create!(email: "AlbertEinstien@relativity.com", password: "password")
Group.create!(user_id: 3, name: "Physics")

User.create!(email: "RichardFeynman@particlephysics.com", password: "password")
Group.create!(user_id: 4, name: "Particle Physics")
