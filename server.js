const express = require('express')
const morgan = require('morgan')
const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 8080
const pub = __dirname + "/build/"
const misc = __dirname + "/misc/"

app.use(morgan('dev'))

app.use(express.static(pub))
app.use(express.static(misc))
routes(app)


app.listen(PORT, () => {
    console.log('Listening on:', PORT)
})