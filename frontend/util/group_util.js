export const ajaxForGroups = function(group_user_id, success, error) {
  $.ajax({
    type: "GET",
    url: "api/groups",
    data: group_user_id,
    success,
    error
  })
}
// group_user_id needs to be in form {group: {user_id: 1}}
