let success = (data) => console.log(data)
let data = {user: {email: "a", password: "abc"}}
$.ajax({
  type: "POST",
  url: "api/users",
  data,
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
  data,
  success
})
