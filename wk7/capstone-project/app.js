const express = require('express');
const app = express();
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))

app.use('/killerData', require('./routes/killerRouter'))
app.listen(4001, ()=> {console.log('Server is operational on port 4001')})