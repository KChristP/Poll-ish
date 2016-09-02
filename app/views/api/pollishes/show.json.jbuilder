json.set! @poll.id do
  json.set! :group_id, @poll.group_id
  json.set! :live, @poll.live
  json.set! :question do
    json.set! :body, @poll.questions.first.body
    json.set! :answers do
      json.array! @poll.answers, :body, :votes
    end
  end
end
