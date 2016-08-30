export const signup = function(user, success, error) {
  $.ajax({
    type: "POST",
    url: "api/users",
    data: user,
    success,
    error
  })
}

export const login = function(user, success, error) {
  $.ajax({
    type: "POST",
    url: "api/session",
    data: user,
    success,
    error
  })
}

export const logout = function(success, error) {
  $.ajax({
    type: "DELETE",
    url: "api/session",
    success,
    error: () => console.log("Logout Error session_api_util")
  })
}
