const express = require('express')
const app = express()
// console.log(express);

app.set('port', process.env.PORT || 8080);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/time', (req, res)=>{
  let isodate = new Date().toISOString()
  res.send(isodate)
})

app.listen(app.get('port'));
