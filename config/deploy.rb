# config valid only for current version of Capistrano
lock '3.4.1'

set :application, 'payment'

set :repo_url, "git@github.com-#{fetch(:application)}:rotati/rotati-payment-solutions-web.git"

ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

set :deploy_to, "/var/www/#{fetch(:application)}"

set :scm, :git

set :keep_releases, 5
