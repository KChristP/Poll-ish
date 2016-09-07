db_poll.answers.all? { |db_answer| id = db_answer.id; frontend_answer = params[:poll][:question][:answers][id]; frontend_answer && db_answer.body == frontend_answer.body && db_answer.votes == frontend_answer.votes}


db_poll.answers.all? do |db_answer| 
  id = db_answer.id
  frontend_answer = params[:poll][:question][:answers][id]
  frontend_answer &&
  db_answer.body == frontend_answer.body &&
  db_answer.votes == frontend_answer.votes
end
