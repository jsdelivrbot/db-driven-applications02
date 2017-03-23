const http = require('http')
const server = http.createServer()
const {readFile}= require('fs')
server.on('request', (req, res) => {
  console.log('Request received for:', req.url)
  readFile('index.html', (err, buff) => {
    res.end(buff)
  })
})
server.listen(8080)
