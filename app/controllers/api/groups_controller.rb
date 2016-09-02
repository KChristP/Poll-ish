class Api::GroupsController < ApplicationController
  def index
    @groups = User.find_by_id(group_params[:user_id]).groups#TODO make sure this is how the currentUser's id is nested from the client side or change this
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      render :show
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def destroy
    @group = Group.find_by(user_params)
    if @group.destroy
      render :show
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  private

  def group_params
    params.require(:group).permit(:name, :user_id)
  end
end
