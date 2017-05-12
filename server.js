import express from 'express'
import morgan from 'morgan'

const app = express()
const PORT = 8080 || process.env.PORT
const pub = __dirname + "/build/"

app.use(morgan('dev'))

app.use('/', express.static(pub));

app.listen(PORT, () => {
    console.log('Listening on:', PORT)
})