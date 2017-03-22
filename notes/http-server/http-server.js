const { createServer } = require('http')
const { readFile } = require('fs')
const server = createServer();

server.on('request', ({ url, method, headers }, res)=>{
  // console.log("request method", req.method);
  // console.log("request url", req.url);
  // console.log("request header", req.header);
  //
  // res.writeHead(200, {"useless_message": "hey"});
  // res.write("Hello, ")
  // res.end("Mom!");

  // // readFile
  // readFile('notes/http-server/index.html', (err, buff) => {
  //   res.end(buff)
  // })

  const path = url.slice(-1) === '/'
  ? url.slice(1).concat('notes/http-server/index.html')
  : url.slice(1)

  console.log("request received for", path);

  readFile(path, (err,buff)=>{
    if(err){
      res.statusCode = 404;
      console.log("response", res);
      return res.end('not found\n')
    }
    res.end(buff);
  })
})

server.listen(8080);
