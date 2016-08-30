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
