'use strict'
const express = require('express')
const app = express()

const egg = (res)=>{
  let now = new Date();
  console.log(`
    You found the Easter Egg at ${now}
            ,ggadddd8888888bbbbaaa,_
         ,ad888,      'Y88,      'Y888baa,
       ,dP"  "Y8b,      '"Y8b,      '"Y8888ba,
      ,88      "Y88b,      '"Y8ba,       '"Y88Ya,
     ,P88b,      '"Y88b,       '"Y8ba,_       ""8a,
    ,P'"Y88b,        "Y88b,        '"Y8ba,_      'Ya,
    8'    "Y88b,        ""Y8ba,         ""Y8ba,_   '8,
    8b       "Y88b,         ""Y8ba,_         ""Y88baaY
    88b,        "Y88ba,         ""Y88ba,_         '""P
    8Y88ba,        ""Y88ba,_         ""Y88ba,,_    ,P'
    'b,"Y88ba,         ""Y88baa,_         """Y888bd"
     'b, '"Y88ba,_         ""Y888baa,_         ,8"
      '8,   '""Y88ba,_         '"""Y8888baaaaaP"
       'Ya,     '""Y888ba,_           '"d88P"
         '"Yb,,_     '""Y888baa,__,,adP""'
             '"""YYYY8888888PPPP"""''
  `)
  //res.sendFile(__dirname + '/public/eggs.html')
}
// const isEgg = (req,res, next) => {
//   if(req.url.includes('egg')){
//     egg()
//   }
// }
app.use((req,res, next) => {
  if(req.url.includes('egg')){
    egg(res)
  }
  next()
})
app.get('/home',(req, res, next)=>{
  res.sendFile(__dirname + '/public/index.html')
})
app.get('/see-our-chickens',(req, res, next)=>{
  res.sendFile(__dirname + '/public/chicken.html')
})
app.get('/see-our-eggs', (req, res, next)=>{
  //isEgg(req)
  res.sendFile(__dirname + '/public/eggs.html')
})

app.use((req, res)=>{
  //isEgg(req)
  res.send('<h1>Looks like you have the wrong page</h1>')
})


app.listen(5050)
