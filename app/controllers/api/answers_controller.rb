class Api::AnswersController < ApplicationController
  def show

  end

  def update
    @answer = Answer.find_by_id(answer_params[:id])
    @answer.votes += answer_params[:vote]
    if @answer.save
      render :show
    else
      render json: @answer.errors.full_messages
    end
  end

  def answer_params
    params.require(:answer).permit(:id, :vote)
  end
end
