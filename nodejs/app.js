
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')


app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());
app.use(helmet());


//cors implementation

// app.use(cors({origin:true, credentials: true}))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, GET, PATCH, DELETE, POST')
        return res.status(200).json({})
    }
    next();
})

//routes which handle requests
const sorting = require('./api/routes/sorting')


app.use('/sorting', sorting)

app.use((req, res, next) => {
    const error = new Error("not found")
    error.status = 404;
    next(error)
})
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    })
})


module.exports = app;
