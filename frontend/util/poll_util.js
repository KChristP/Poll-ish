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
export const ajaxForDestroyPoll = function(poll, success, error) {
  let url = "api/pollishes/" + poll.id
  $.ajax({
    type: "DELETE",
    url: url,
    data: poll,
    success,
    error
  })
}

export const ajaxForUpdatePoll = function(poll, success, error) {
  let url = "api/pollishes/" + poll.id
  $.ajax({
    type: "PATCH",
    url: url,
    data: poll,
    success,
    error
  })
}
export const ajaxForRequestPoll = function(poll_id, success, error) {
  let url = "api/pollishes/" + poll_id
  $.ajax({
    type: "GET",
    url: url,
    success,
    error
  })
}
