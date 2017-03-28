'use strict'

const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');

const names = ['Ben', 'Bob', 'Bill', 'Tom', 'Tim'];

app.get('/',(req, res, next)=>{
  res.render('index', {subtitle: "This is JS boi", names, loggedIn: false})
})

app.get('/article',(req, res, next)=>{
  res.render('article', {subtitle: "This is JS boi", names, loggedIn: true})
})

const port = process.env.PORT || 5050
app.set ('port', port)

app.listen(port, ()=>{
  console.log(`Your port is ${port}`);
})
