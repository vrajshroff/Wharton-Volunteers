const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/index.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/auth.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/auth.html'));
})


app.get('/create.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/create.html'));
})

app.get('/about.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/about.html'));
})

app.get('/hospital.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/hospital2.html'));
})