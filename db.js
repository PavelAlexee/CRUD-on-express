const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  password: '12345',
  host: 'localhost',
  port: '5432',
  database: 'node_postgres'
  //password: "12345"
})


module.exports = pool 