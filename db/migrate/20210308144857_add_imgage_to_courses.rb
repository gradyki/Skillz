class AddImgageToCourses < ActiveRecord::Migration[6.1]
  def change
    add_column :courses, :img_url, :string
  end
end
