const express = require('express')
const app = express()
const port = 443
const connectToMongo = require("./db")
const https = require('https');
const fs = require('fs');

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

     // Start the HTTPS server
  const server = https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app);
    
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  })
