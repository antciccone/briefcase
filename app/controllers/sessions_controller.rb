class SessionsController < ApplicationController
  def new
    redirect_to '/auth/census'
  end

  def create
    census_user_info = env["omniauth.auth"]
    user = User.create_from_census(census_user_info)
    if(user)
      session["user_id"] = user.uid
      render component: 'Main', props: { users: User.all, signed_in: 1 }
    end
  end

end