class ArticlesController < ApplicationController
  HOST = 'http://m.auto.co.il/autoAPI.svc'
  respond_to :json, :html

  def index
     respond_to do |format|

        format.html {

        }

        format.json{
          respond_with Net::HTTP.get URI.parse(HOST + "/articles") unless params[:category]
          respond_with Net::HTTP.get URI.parse(HOST + "/articles?category=" + params[:category] + "&count=10") if params[:category]
        }


     end

  end

  def show
     respond_with Net::HTTP.get URI.parse(HOST + "/articles/" + params[:id])
  end

end
