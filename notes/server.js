const { get } = require('https');
const { readFile } = require('fs')

//AJAX-like request
get('https://node-http.firebaseio.com/words.json', res => {

  const statusCode = res.statusCode
  const contentType = res.headers['content-type'];

  let error = null;
  if (statusCode !== 200) {
    error = new Error(`Request Failed.\n Status Code: ${statusCode}`)
  }else if (!/^application\/json/.test(contentType)) {
    error = new Error(`Invalid content-type.\n Expected application/json but received ${contentType}`);
  }
  if (error) {
    console.log(error.message);
    res.resume();
    return;
  }

  let body = ''
  res.on('data',(buff) => {
    body += buff.toString()
  })
  res.on('end', () =>{
    console.log(JSON.parse(body).slice(0, 10));
  })
})
