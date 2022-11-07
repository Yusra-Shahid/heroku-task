const express = require('express')
const app = express()
const port = 3000

// app.use(express.static('public/car.jpg'))


app.get('/', (req, res) => {
  res.send('kamkro')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
