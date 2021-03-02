source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.0'
gem 'rails', '~> 6.1.1'

gem 'bootsnap', '>= 1.4.4', require: false
gem 'jbuilder', '~> 2.7'
gem 'mail_form', '~> 1.9'
gem 'pg', '~> 1.1'
gem 'puma', '~> 5.2.2'
gem 'sass-rails', '>= 6'
gem 'sendgrid-ruby', '~> 6.3', '>= 6.3.9'
gem 'turbolinks', '~> 5'
gem 'webpacker', '~> 5.0'
# gem 'redis', '~> 4.0'
# Use Active Storage variant

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 3.35', '>= 3.35.3'
  gem 'figaro' # to hide the keys
  gem 'launchy', '~> 2.5'
  gem 'pry'
  gem 'rspec-rails'
  gem 'selenium-webdriver'
  gem 'simplecov'
end

group :development do
  gem 'listen', '~> 3.3'
  gem 'rack-mini-profiler', '~> 2.0'
  gem 'spring'
  gem 'web-console', '>= 4.1.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
