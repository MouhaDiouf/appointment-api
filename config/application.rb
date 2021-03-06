# frozen_string_literal: true

require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Appointment
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.api_only = true
    config.middleware.use ActionDispatch::Cookies

    config.load_defaults 5.2
    config.assets.initialize_on_precompile = false
    config.assets.initialize_on_precompile = false
    # config.action_dispatch.default_headers = {
    #     'Access-Control-Allow-Origin' => '*',
    #     'Access-Control-Request-Method' => %w{GET POST OPTIONS}.join(",")
    #   }

    config.middleware.insert_before ActionDispatch::Static, Rack::Cors do
      allow do
        origins 'https://appointcar.netlify.app', 'http://localhost:3000'
        resource '*', headers: :any, methods: %i[get post put patch delete options head],
                      credentials: true
      end
    end

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end
