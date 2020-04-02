const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', function(req, res) {
  res.render(path.join(__dirname + '/index.ejs'));
})

app.get('/auth', function(req, res) {
  res.sendFile(path.join(__dirname + '/auth.html'));
})

app.get('/create', function(req, res) {
  res.render(path.join(__dirname + '/create.ejs'));
})