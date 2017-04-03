'use strict'

const express = require('express')
const app = express()

app.use(express.static('public'));

app.set('view engine', 'pug')

const food = [
  {
    'name':'Cupcake',
    'price':0.99
  },
  {
    'name':'Brownie',
    'price':1.99
  },
  {
    'name':'Meat Pie',
    'price':1.99
  },
  {
    'name':'Fake Cake',
    'price':1.99
  },
  {
    'name':'Real Cake',
    'price':1.99
  },
  {
    'name':'Lie Cake',
    'price':1.99
  }]

app.get('/', (req, res, next) => {
  res.render('index')
})

app.get('/about', (req, res, next) => {
  res.render('about')
})

app.get('/inventory',(req, res, next) =>{
  res.render('inventory', {products: food})
})

const port = process.env.PORT || 5050
app.set ('port', port)

app.listen(port, ()=>{
  console.log(`Your port is ${port}`);
})
