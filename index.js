
const port = 3000
const bodyparser = require('body-parser')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const pool = require('./dbconnection')
const TodoController = require('./controllers/todoController')

//const TODO_BASE_ROUTE = '/todo';

const todoController = new TodoController()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


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

app.get('/count', async(req,res) => {
  let result=await pool.query('select count (*) as total,count (*) FILTER (where done = true) as notNULL ,count (*) FILTER (where done = false) as NULL from public.todoList')
  console.log(result);
  res.json(result.rows)
 
})
//SELECT done, COUNT(*) task FROM public.todoList GROUP BY done,id
app.put('/todo/update',todoController.UpdateTask)

// async(req,res)=>{
//   let result = await pool.query('UPDATE public.todoList SET task = $2 WHERE id = $1',[req.body.id,req.body.task])
//   console.log(result);
//   res.json({
//     "status": "updated"
//   })
// })


app.put('/boolen/update',async(req,res)=>{
  let result = await pool.query('SELECT done FROM publis.todoList  ')
  console.log(result);
  res.json({
    todo:result.rows
  })
})

app.post('/todo/create', todoController.createTask)

// async(req,res) => {
//   let result=await pool.query('INSERT INTO public.todoList(id, task) VALUES ($1,$2)',[req.body.id,req.body.task])
//   console.log(result);
//   res.json({
//     "status":"task created"
//   })
// })
app.get ('/taskdone',todoController.getAll)

// app.get('/testdb',async (request, response) => {
// let res = await pool.query('select * from public.todoList')
// console.log(res);
// response.json({info :' Node.js, and Express, and Postgres API'})
//   })
app.delete('/todo/delete',todoController.DeleteTask)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
