const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res, next) => {
  res.sendfile('index.html')
})

app.listen(3000, () => {
  console.log('Server is listeneing on port 3000.')
})
