#
# json.groups do
#   @groups.each do |group|
#     json.set! group.id do
#       json.set! :name, group.name
#       json.set! :user_id, group.user_id
#     end
#   end
# end
@groups.each do |group|
  json.set! group.id do
    json.set! :name, group.name
    json.set! :user_id, group.user_id
  end
end
