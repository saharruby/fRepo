class CatalogController < ApplicationController
  HOST = 'http://m.auto.co.il/autoAPI.svc'
  respond_to :json, :html

  def index
     respond_to do |format|

        format.html {

        }

        format.json{
          respond_with Net::HTTP.get URI.parse(HOST + "/manufacturers") unless params[:id]
          respond_with Net::HTTP.get URI.parse(HOST + "/manufacturers/" + params[:id]) if params[:id]
        }


     end

  end

  # def show
  #    respond_with Net::HTTP.get URI.parse(HOST + "/articles/" + params[:id])
  # end

end