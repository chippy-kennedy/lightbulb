Bundler.require
require 'yaml'
require 'sinatra'
require 'sinatra/asset_pipeline'
require 'font-awesome-sass'

class Chippy < Sinatra::Base
  register Sinatra::Partial
  register Sinatra::AssetPipeline
  set :assets_prefix, '/assets'
  set :haml, format: :html5
  set :assets_debug, true
  set :digest_assets, false

	Tilt.register Tilt::ERBTemplate, 'html.erb'

  configure do
    sprockets.append_path File.dirname(HamlCoffeeAssets.helpers_path)
  end

  set :sockets, []

  def websocket_send(data)
    EM.next_tick { settings.sockets.each{|s| s.send(data.to_json) } }
  end

  get '/' do
    if request.websocket?
      request.websocket do |ws|
        ws.onopen do
          settings.sockets << ws
        end
        ws.onclose do
          settings.sockets.delete(ws)
        end
      end
    else
      #haml :index
			erb :home, :format => :layout
    end
  end

end
