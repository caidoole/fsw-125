const express = require('express');
const app = express();

app.use(express.json())

app.use('/bounty', require('./routes/bountyRouter.js'))

app.listen(3001, () => { console.log('Server is operational') })