class HomeController < ApplicationController

    def delete_marked
        @delete_marked = List.where(:completed => true).destroy_all
        redirect_to root_url, notice: 'All marked items were successfully deleted.'
    end

    def delete_all
        @delete_all = List.all.destroy_all
        redirect_to root_url, notice: 'All items were successfully deleted.'
    end
end