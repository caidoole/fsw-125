const express = require('express');
const app = express();
const morgan = require ('morgan')

app.use(express.json())
app.use(morgan('dev'))

app.use('/things', require('./routes/thingRouter'))

app.listen(3001, ()=> {console.log("This is up an running!!!")})