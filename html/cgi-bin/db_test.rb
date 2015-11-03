require 'sqlite3'

db = SQLite3::Database.new("iot.sqlite3")

db.transaction do
  sql = "insert into logs(log) values (?)"
  db.execute(sql, "secound log from ruby!")
end

db.execute('select * from logs') do |row|
  puts row.join("\t")
end

db.close
