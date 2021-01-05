ActiveRecord::Schema.define(version: 2021_01_03_115145) do

  create_table "lists", force: :cascade do |t|
    t.string "description"
    t.boolean "completed", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
