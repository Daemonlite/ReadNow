const express = require('express')
const dotenv = require('dotenv' ).config()
const app = express()
const cors = require('cors')
const port = 8000


//middlewares
app.use((cors()))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use('/api/users',require('./routes/userRoutes'))

//server
app.listen(port,console.log(`SERVER RUNNING ON PORT ${port}`))