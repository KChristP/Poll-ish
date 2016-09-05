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
export const ajaxForCreateGroup = function(group, success, error) {
  $.ajax({
    type: "POST",
    url: "api/groups/",
    data: group,
    success,
    error
  })
}

export const ajaxForDestroyGroup = function(group, success, error) {
  let url = "api/groups/" + group.group.id
  $.ajax({
    type: "DELETE",
    url: url,
    data: group,
    success,
    error
  })
}
