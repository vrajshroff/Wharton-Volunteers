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
  res.render(path.join(__dirname + '/index.ejs'));
})

app.get('/auth', function(req, res) {
  res.sendFile(path.join(__dirname + '/auth.html'));
})

app.get('/create', function(req, res) {
  res.render(path.join(__dirname + '/create.ejs'));
})

app.get('/temp', function(req, res) {
  res.sendFile(path.join(__dirname + '/temp.html'));
})

app.post('/addHospital', function(req, res) {
  console.log(req.body);
  res.render(path.join(__dirname + '/create.ejs'));
})