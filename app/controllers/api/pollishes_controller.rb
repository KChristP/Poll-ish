class Api::PollishesController < ApplicationController
  def index
    user_id = Group.find_by_id(poll_params[:group_id])
    @polls = User.find_by_id(user_id).pollishes
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

  def edit#TODO need to add a compare function to compare Q&A of params vs Q&A of db object. if different do the swap as written
    #if not different - just swap group_id or live status and skip this (so we don't lose poll vote data every time we go live)
    compile_new_poll_from_params
    if @poll.save
      ensure_single_live
      Pollish.find_by_id(poll_params[:id]).destroy
      render :show
    else
      render json: @poll.errors.full_messages
    end
  end

  def show

  end

  def destroy
    @poll = Pollish.find_by_id(poll_params[:id])
    @poll.destroy
    render :show
  end

  private

  def poll_params
    params.require(:poll).permit(:group_id, :live, :id, :question)
  end

  def ensure_single_live
    return if poll_params[:live] == false
    user_id = Group.find_by_id(poll_params[:group_id])
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
    @poll = Pollish.new(
      group_id: poll_params[:group_id],
      live: poll_params[:live],
      questions_attributes: [{
        body: params[:poll][:question][:body],
        answers_attributes: answers_attributes
      }]
    )
  end

  # def update_question(question)
  #   @question = Question.find_by_id(question[:id])
  #   @question.body = question[:body]
  # end
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

# def manage_live
#   if poll_params[:live] != @poll.live
#     @poll.live = poll_params[:live]
#   end
# end
#
# def manage_group_id
#   if poll_params[:group_id] != @poll.group_id
#     group = Group.find_by_id(poll_params[:id])
#     @poll.group = group
#   end
