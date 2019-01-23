class Api::V1::SeaLivesController < ApplicationController

before_action :find_seaLife, only: [:show, :update]
  def index
    @seaLives = SeaLife.all
    render json: @seaLives
  end

  def show
  	find_seaLife
    render json: @seaLife, status: :ok
  end

  def update
    find_seaLife
    @seaLife.update(seaLives_params)
    if @seaLife.save
      render json: @seaLife, status: :accepted
    else
      render json: { errors: @note.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def seaLives_params
    params.permit(:name, :image, :isMyFavorite)
  end

  def find_seaLife
    @seaLife = SeaLife.find(params[:id])
  end
end
