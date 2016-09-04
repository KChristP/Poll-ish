export const ajaxForAllPolls = function(user_id, success, error) {
  $.ajax({
    type: "GET",
    url: "api/pollishes",
    data: user_id,
    success,
    error
  })
}

export const ajaxForCreatePoll = function(poll, success, error) {
  $.ajax({
    type: "POST",
    url: "api/pollishes",
    data: poll,
    success,
    error
  })
}
