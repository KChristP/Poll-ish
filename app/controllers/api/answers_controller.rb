class Api::AnswersController < ApplicationController
  def show

  end

  def update
    @answer = Answer.find_by_id(answer_params[:id])
    @answer.votes += answer_params[:vote].to_i
    if @answer.save
      Pusher.trigger('answer_' + @answer.id.to_s, 'vote_added', {
        message: 'hello world'
      })
      # Pusher.trigger('test_channel', 'my_event', {
      #   message: 'hello world'
      # })
      render :show
    else
      render json: @answer.errors.full_messages
    end
  end

  def answer_params
    params.require(:answer).permit(:id, :vote)
  end
end
