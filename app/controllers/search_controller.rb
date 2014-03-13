class SearchController < ApplicationController
  HOST = 'http://m.auto.co.il/autoAPI.svc'
  respond_to :json

  def index
    respond_with Net::HTTP.get URI.parse(HOST + "/search?manufacturer=" + params[:id]) if params[:id] #unless params[:id]
  end

  def home
    respond_with Net::HTTP.get URI.parse(HOST + "/search?models/" + params[:id])  if params[:id]
  end
end