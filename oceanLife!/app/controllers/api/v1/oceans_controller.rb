class Api::V1::OceansController < ApplicationController

  def index
  	@oceans = Ocean.all
  render json: @oceans, status: :ok
  end

  def show
    @ocean = Ocean.find(params[:id])
    render json: @ocean, status: :ok
  end



  private
  def ocean_params
    params.require(:ocean).permit(:name, :image)
  end

end
