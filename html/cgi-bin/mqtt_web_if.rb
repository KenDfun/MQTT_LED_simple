#!C:/tool/Ruby200/bin/ruby.exe
# -*- mode:ruby; coding:utf-8 -*-

require 'sqlite3'
require 'cgi'
require 'erb'


def save_status(status_led)
  db = SQLite3::Database.new("iot.sqlite3", :timeout => 60000)
  db.busy_timeout=60000

  sql = "select status from led where id=?"
  @led=0;
  db.execute(sql, status_led) do |low|
    @led = 1^low[0]
  end

  sql = "update led set status=? where id=?"
  db.execute(sql, @led, status_led)
  db.close
end

cgi = CGI.new

# print "test"
status_led = 0;
status_led = cgi['led'].to_i

save_status(status_led)
print "Content-type: text/html\n\n"
# print status_led
