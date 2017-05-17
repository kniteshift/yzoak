const express = require('express')
const morgan = require('morgan')

const app = express()
const PORT = process.env.PORT || 8080
const pub = __dirname + "/build/"

app.use(morgan('dev'))

app.use('/', express.static(pub));



app.listen(PORT, () => {
    console.log('Listening on:', PORT)
})