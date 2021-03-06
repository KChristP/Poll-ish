class Api::PollishesController < ApplicationController
  def index
    # user_id = Group.find_by_id(params[:user_id])
    @polls = User.find_by_id(params[:user_id]).pollishes
  end

  def create
    compile_new_poll_from_params
    if @poll.save
      ensure_single_live
      render :show
    else
      render json: @poll.errors.full_messages
    end
  end

  def update
    @poll = Pollish.find_by_id(poll_params[:id])
    if poll_params[:place_vote]
      @answer = Answer.find_by_id(poll_params[:answer_id])
      @answer.votes += 1
      if @answer.save
          Pusher.trigger('poll_' + @poll.id.to_s, 'vote_added', {
            poll_id: @poll.id,
            vote_for: @answer.body
          })
          render :show
          return
      else
        render json: @answer.errors.full_messages
      end
    end

    if poll_params[:make_live] == "true"
      @poll.live = true
      @poll.save
      ensure_single_live
      render :show
      return
    elsif poll_params[:make_live] == "false"
      @poll.live = false
      @poll.save
      ensure_single_live
      render :show
      return
    end

    if same_q_and_a?
      manage_live
      manage_group_id
      if @poll.save
        render :show
      else
        render json: @poll.errors.full_messages
      end
      return
    else
      compile_new_poll_from_params
    end
    if @poll.save
      ensure_single_live
      Pollish.find_by_id(poll_params[:id]).destroy
      render :show
    else
      render json: @poll.errors.full_messages
    end
  end

  def show
    @poll = Pollish.find_by_id(params[:id])
  end

  def destroy
    @poll = Pollish.find_by_id(poll_params[:id])
    @poll.destroy
    render :show
  end

  private

  def poll_params
    params.require(:poll).permit(:user_id, :make_live, :answer_id, :place_vote, :group_id, :live, :id, question: [:body, :id, :question_id, answers: [:body, :id, :live]])
  end

  def ensure_single_live
    return if poll_params[:live] == false
    user_id = @poll.user.id
    polls = User.find_by_id(user_id).pollishes
    (polls - [@poll]).each do |poll|
      if poll.live == true
        poll.live = false
        poll.save
      end
    end
  end

  def compile_new_poll_from_params
    answers_attributes = []
    params[:poll][:question][:answers].each do |answer|
      answers_attributes << {body: answer}
    end
    groupId = poll_params[:group_id] ? poll_params[:group_id] : Group.create(name: "Ungrouped", user_id: poll_params[:user_id]).id

    @poll = Pollish.new(
      group_id: groupId,
      live: poll_params[:live],
      questions_attributes: [{
        body: params[:poll][:question][:body],
        answers_attributes: answers_attributes
      }]
    )

  end

  def same_q_and_a?
    db_poll = Pollish.find_by_id(poll_params[:id])
    db_answers = db_poll.answers.map {|answer| answer.body}
    db_poll.questions[0].body == params[:poll][:question][:body] &&
      db_answers.sort == params[:poll][:question][:answers].sort
  end

  def manage_live
    if poll_params[:live] != @poll.live
      @poll.live = poll_params[:live]
    end
  end

  def manage_group_id
    if poll_params[:group_id].to_i != @poll.group_id
      group = Group.find_by_id(poll_params[:group_id])
      @poll.group = group
    end
  end
end

# Pollish.new({live: false, group_id: 1, questions_attributes: [{body: "why not zoidberg?", answers_attributes: [{body: "because"}, {body: "I said so"}]}]})
#Old create method
# if @poll.save
#   # debugger
#   ensure_single_live
#   @question = Question.new(body: params[:poll][:question][:body], pollish_id: @poll.id)
#   if @question.save
#     params[:poll][:question][:answers].each do |answer|
#       Answer.new(body: answer, question_id: @question.id)
#     end
#   end
#   render :show
# else
#   errors = {poll_errors: @poll.errors.full_messages, question_errors: @question.errors.full_messages}
#   render json: errors
# end


# def manage_question_and_answers
#   question = params[:poll][:question]
#   if question[:id]
#     db_question = Question.find_by_id(question[:id])
#     db_question.destroy
#   end
#     add_question(question)
#   end
#
#   # answers = poll_params[:question][:answers]
#   # if question != @poll.question
#   #   @poll.question = question
#   # end
#
# end

# def update_question(question)
#   @question = Question.find_by_id(question[:id])
#   @question.body = question[:body]
# end
