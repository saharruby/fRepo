class CatalogController < ApplicationController
  HOST = 'http://m.auto.co.il/autoAPI.svc'
  respond_to :json

  def index
    respond_with Net::HTTP.get URI.parse(HOST + "/manufacturers") unless params[:id]
    respond_with Net::HTTP.get URI.parse(HOST + "/manufacturers/" + params[:id]) if params[:id]
  end

  # def show
  #    respond_with Net::HTTP.get URI.parse(HOST + "/articles/" + params[:id])
  # end

end