var mysql = require('mysql2');
var conn = mysql.createConnection({
  host: '192.168.211.130',
  user: 'nodejs',
  password: 'Centos2+Centos2',
  database: 'nodejs'
});
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;
