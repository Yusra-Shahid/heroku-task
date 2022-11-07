const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

const Pool = require('./dbconnection')
const { default: pool } = require('./dbconnection')

app.get('/', (request, response) => {
 response.json({info :' Node.js, and Express, and Postgres API'})
})

app.get('/testdb',async (request, response) => {
//     dbPool.Query('select * from todoList,'(req,res) => {
// console.log(res);
//     })
let res = await pool.query('select * from todoList')
console.log(res);
response.json({info :' Node.js, and Express, and Postgres API'})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
