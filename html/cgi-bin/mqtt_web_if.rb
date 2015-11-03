#!C:/tool/Ruby200/bin/ruby.exe
# -*- mode:ruby; coding:utf-8 -*-

require 'sqlite3'
require 'cgi'
require 'erb'


def save_status(status_led1=0,status_led2=0,status_led3=0)
  db = SQLite3::Database.new("iot.sqlite3")

  db.transaction do
    sql = "update led set status=? where id=?"
    db.execute(sql, status_led1, 0)
    db.execute(sql, status_led2, 1)
    db.execute(sql, status_led3, 2)
  end

  db.close
end



cgi = CGI.new
status_led1 = 0;
status_led2 = 0;
status_led3 = 0;

led1 = cgi['led1']
str_led1 = ""
if led1==''
  str_led1 = "OFF"
else
  str_led1 = "ON"
  status_led1 = 1
end

led2 = cgi['led2']
str_led2 = ""
if led2==''
  str_led2 = "OFF"
else
  str_led2 = "ON"
  status_led2 = 1
end

led3 = cgi['led3']
str_led3 = ""
if led3==''
  str_led3 = "OFF"
else
  str_led3 = "ON"
  status_led3 = 1
end

save_status(status_led1,status_led2,status_led3)


content = ""
File.open("content_led.html.erb",'r:utf-8'){|f|
  content = ERB.new(f.read).result(binding)
}

print "Content-type: text/html\n\n"
print content
