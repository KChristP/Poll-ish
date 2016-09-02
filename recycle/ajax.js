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
