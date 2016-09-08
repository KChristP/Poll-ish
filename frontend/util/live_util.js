export const ajaxForRequestLive = function(user_id, success, error) {
  let url = "api/users/" + user_id
  $.ajax({
    type: "GET",
    url: url,
    success,
    error
  })
}
