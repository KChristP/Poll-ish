export const ajaxForGroups = function(group_user_id, success, error) {
  $.ajax({
    type: "GET",
    url: "api/groups",
    data: group_user_id,
    success,
    error
  })
}
export const ajaxForUpdateGroup = function(group, success, error) {
  let url = "api/groups/" + group.group.id
  $.ajax({
    type: "PATCH",
    url: url,
    data: group,
    success,
    error
  })
}
// group_user_id needs to be in form {group: {user_id: 1}}
