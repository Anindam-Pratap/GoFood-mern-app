const express = require('express')
const app = express()
const port = 443
const connectToMongo = require("./db")
const https = require('https');
c

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","https://gofoooood.netlify.app")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
  )
  next()
})

connectToMongo()
  .then(() =>{
    app.get('/', (req, res) => {
      res.send('Hello World!')
    })

    app.use('/api', require('./Routes/CreateUser'))
    app.use('/api', require('./Routes/DisplayData'))
    app.use('/api', require('./Routes/OrderData'))

   
    
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  })
