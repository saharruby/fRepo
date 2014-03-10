class HomeController < ApplicationController
  respond_to :json, :html

  def main
  end

  def index
     respond_to do |format|

        format.html {

        }

        format.json{
            render json: [
              { name: 'קטלוג הרכב', img: '......', route: '.......'},
              { name: 'כתבות', img: '......', route: '.......'},
              { name: 'מדריך קניה', img: '......', route: '.......'},
              { name: 'יייעוץ חינם לקניית רכב', img: '......', route: '.......'},
              { name: 'מועדפים', img: '......', route: '.......'}]
        }


     end

  end

end
