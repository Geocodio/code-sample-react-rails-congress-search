require 'dotenv-rails'
require 'geocodio/gem'

class DistrictsController < ApplicationController
    def get_districts
        addressString = params["search"]
        geocodio = Geocodio::Gem.new(ENV["API_KEY"])
        location = geocodio.geocode([addressString], ["cd"])
        district = location["results"][0]["fields"]["congressional_districts"][0]
        
        render json: district
    end
end