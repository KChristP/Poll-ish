# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create!(email: "CharlesDarwin@evolution.com", password: "password")
User.create!(email: "AlbertEinstien@relativity.com", password: "password")
User.create!(email: "RichardFeynman@particlephysics.com", password: "password")
User.create!(email: "MasterPollster@poll-ish.com", password: "password")


Group.create!(user_id: 1, name: "Evolution")
Group.create!(user_id: 1, name: "Physics")


Pollish.create!(group_id: 1)

Question.create!(body: "Which came first... the chicken or the egg?", pollish_id: 1)

Answer.create!(body: "Chicken", question_id: 1, votes: 1)
Answer.create!(body: "Egg", question_id: 1, votes: 999)
