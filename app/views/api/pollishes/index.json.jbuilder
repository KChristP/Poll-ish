
  @polls.each do |poll|
    json.set! poll.id do
      json.set! :group_id, poll.group_id
      json.set! :live, poll.live
      json.set! :question do
        # debugger
        if poll.questions.first
          json.set! :body, poll.questions.first.body ? poll.questions.first.body : nil
          json.set! :answers do
            json.array! poll.answers, :body, :votes
          end
        else
          json.null!
        end
      end
    end
  end


#TODO -- this is absurdly slow - I need a better way to do is jbuilding...

# json.extract! :group_id, :live
