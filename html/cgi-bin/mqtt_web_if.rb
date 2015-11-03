#!C:/tool/Ruby200/bin/ruby.exe
# -*- mode:ruby; coding:utf-8 -*-

require 'cgi'
require 'erb'

print "Content-type: text/html\n\n"

cgi = CGI.new

led1 = cgi['led1']
str_led1 = ""
if led1==''
  str_led1 = "OFF"
else
  str_led1 = "ON"
end

led2 = cgi['led2']
str_led2 = ""
if led2==''
  str_led2 = "OFF"
else
  str_led2 = "ON"
end

led3 = cgi['led3']
str_led3 = ""
if led3==''
  str_led3 = "OFF"
else
  str_led3 = "ON"
end

content = ""
File.open("content_led.html.erb",'r:utf-8'){|f|
  content = ERB.new(f.read).result(binding)
}

printf content
