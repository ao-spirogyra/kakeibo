FROM ruby:2.6.6
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
WORKDIR /kakeibo/server
COPY Gemfile /kakeibo/server/Gemfile
COPY Gemfile.lock /kakeibo/server/Gemfile.lock
RUN bundle install
COPY . /kakeibo/server

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 5000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]