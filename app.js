require('dotenv').config()
const express = require('express')
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const errorMiddleware = require('./middlewares/error')
const authRoute = require('./routes/auth-route')
const app = express()

app.use(cors())
app.use(express.json())

// service

app.use('/auth', authRoute)

// notFound
app.use( notFound )

// error
app.use(errorMiddleware)

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server run on port" + " " + port);
});