export const ajaxForAllPolls = function(user_id, success, error) {
  $.ajax({
    type: "GET",
    url: "api/pollishes",
    data: user_id,
    success,
    error
  })
}
