#!C:/tool/Ruby200/bin/ruby.exe
# -*- mode:ruby; coding:utf-8 -*-

require 'sqlite3'
require 'cgi'
require 'erb'


def get_status
  db = SQLite3::Database.new("iot.sqlite3")
  sql = "select status from led"
  arry = []
  db.execute(sql) do |row|
    arry.push(row[0])
  end
  db.close
  return arry
end

def out_html(led)
  str_led = []
  (0..2).each do |i|
    str_led[i] = led[i]==1 ? "checked=\"checked\"" : ""
  end

  content = ""
  File.open("content_led.html.erb",'r:utf-8'){|f|
    content = ERB.new(f.read).result(binding)
  }

  print "Content-type: text/html\n\n"
  print content
end

status = [0,0,0]
status = get_status()

out_html(status)
