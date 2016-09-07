export const ajaxForVotePoll = function(user_id, success, error) {
  let url = "api/users/" + user_id
  $.ajax({
    type: "GET",
    url: url,
    success,
    error
  })
}
export const ajaxForCastVote = function(vote, success, error) {
  let url = "api/pollishes/" + vote.poll.id
  $.ajax({
    type: "PATCH",
    url: "api/pollishes/1",
    data: vote,
    success
  })
}
