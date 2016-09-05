let success = (data) => console.log(data)
let data = {user: {email: "a", password: "abc"}}


let user = {user: {email: "a", password: "password"}}
Store.dispatch(Login(user))
Store.dispatch(Logout(user))
Store.dispatch(Signup(user))

$.ajax({
  type: "POST",
  url: "api/users",
  data: user,
  success
})

$.ajax({
  type: "DELETE",
  url: "api/session",
  success
})

$.ajax({
  type: "POST",
  url: "api/session",
  data: user,
  success
})

let success = (data) => console.log(data)
$.ajax({
  type: "GET",
  url: "api/groups",
  data: {user_id: 1},
  success
})



let success = (data) => console.log(data)
$.ajax({
  type: "POST",
  url: "api/groups",
  data: {group: {name: "Physics", user_id: 1}},
  success
})

let success = (data) => console.log(data)
$.ajax({
  type: "POST",
  url: "api/pollishes",
  data: {poll: {live: false, group_id: 1, question: {body: "who", answers: ["me", "you"]}}},
  success
})

Pollish.create({live: false, group_id: 1, questions_attributes: [{body: "who"}]})
Pollish.create({live: false, group_id: 1, questions_attributes: [{body: "who", answers_attributes: [{body: "myself"}]}]})


let success = (data) => console.log(data)
$.ajax({
  type: "GET",
  url: "api/pollishes",
  data: {poll: {group_id: 1}},
  success
})

// Started POST "/api/pollishes" for 127.0.0.1 at 2016-09-04 13:48:43 -0700
// Processing by Api::PollishesController#create as JSON
//   Parameters: {"poll"=>{"live"=>"false", "question"=>{"body"=>"Did it work?", "answers"=>["Yes", "No", "Maybe", "I don't know"]}}}
// Unpermitted parameter: question
// Unpermitted parameter: question
//    (3.5ms)  BEGIN
//    (0.2ms)  ROLLBACK
// Completed 200 OK in 231ms (Views: 0.9ms | ActiveRecord: 3.7ms)
//
//
//
//
// Started POST "/api/pollishes" for 127.0.0.1 at 2016-09-04 13:54:35 -0700
// Processing by Api::PollishesController#create as JSON
//   Parameters: {"poll"=>{"live"=>"false", "group_id"=>"1", "question"=>{"body"=>"who", "answers"=>["me", "you"]}}}
// Unpermitted parameter: question
// Unpermitted parameter: question
// (0.2ms)  BEGIN
//   Group Load (0.3ms)  SELECT  "groups".* FROM "groups" WHERE "groups"."id" = $1 LIMIT 1  [["id", 1]]
