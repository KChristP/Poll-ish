class Api::UsersController < ApplicationController
  def create
    # debugger
    @user = User.new(user_params)
    if @user.save
      login(@user)
      Group.create(name: "Ungrouped", user_id: @user.id)#this allows me to have a default "ungrouped" group available for every new user
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show#This is kinda weird. session controller calls the users/show view, whereas this users#show method calls pollishes show view
    @user = User.find_by_id(params[:id])
    @poll = @user.pollishes.where(live: true)[0]
    render "api/pollishes/show"
  end

  def destroy

  end

  private

  def user_params
    params.require(:user).permit(:password, :email)

  end
end
