class CoursesController < ApplicationController
  before_action :set_course, only: :show
  before_action :authorize_request, only: [:create, :update, :destroy]
  # GET /courses
  def index
    @courses = Course.all

    render json: @courses, include: :topic, status: :ok
    
  end

  # GET /courses/1
  def show
    render json: @course, include: :topic, status: :ok
  end

  # POST /courses
  def create
    @course = Course.new(course_params)
    @course.user = @current_user

    if @course.save
      render json: @course, status: :created, location: @course
    else
      render json: @course.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /courses/1
  def update
    @course = Course.find(params[:id])
    if @course.update(course_params)
      render json: @course
    else
      render json: @course.errors, status: :unprocessable_entity
    end
  end

  # DELETE /courses/1
  def destroy
    @course = Course.find(params[:id])
    @course.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_course
      @course = Course.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def course_params
      params.require(:course).permit(:title, :info, :price, :user_id, :img_url, :topic_id)
    end
end
