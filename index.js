const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000
const bodyparser = require('body-parser')

const pool = require('./dbconnection')
const bodyParser = require('body-parser')
// const { default: pool } = require('./dbconnection')

app.use (bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended:true
  })
)

app.get('/', (request, response) => {
 response.json({info :' Node.js, and Express, and Postgres API'})
})

app.get('/testdb', async (request, response) => {
    let res = await pool.query('select * from public.todoList')
    console.log(res);
    response.json({todo:res.rows})
})

// app.get('/testdb',async (request, response) => {
// let res = await pool.query('select * from public.todoList')
// console.log(res);
// response.json({info :' Node.js, and Express, and Postgres API'})
//   })

app.post('/todo/create', async(req,res) => {
  let result=await pool.query('INSERT INTO public.todoList(id, task) VALUES ($1,$2)',[req.body.id,req.body.task])
  console.log(result);
  res.json({
    "status":"task created"
  })

})

// app.update('./todo/update',async(req,res)=>{
//   let result = await pool.query('UPDATE INTO public.todo(id, task) ')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
