const { get } = require('http');
const { readFile } = require('fs')
const{argv:[,,arg]} = process


get(`http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters=%7B%22Normalized%22%3Afalse%2C%22NumberOfDays%22%3A365%2C%22DataPeriod%22%3A%22Day%22%2C%22Elements%22%3A%5B%7B%22Symbol%22%3A%22${arg}%22%2C%22Type%22%3A%22price%22%2C%22Params%22%3A%5B%22c%22%5D%7D%5D%7D`, res =>{
  const statusCode = res.statusCode
  //console.log("res", res);
  console.log("statusCode", statusCode);
  const contentType = res.headers['content-type'];
  let data = ''
  res.on('data', buff =>{
    data += buff.toString()
  })
  res.on('end', ()=>{
    let {Elements:[{DataSeries:{close:{values}}}]} = JSON.parse(data)
    let total = values.reduce((a,b)=> a+b);
    console.log((total/365).toFixed(2));
  })
})
