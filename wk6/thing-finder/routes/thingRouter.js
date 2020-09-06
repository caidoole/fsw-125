const express = require('express');
const thingRouter = express.Router();

const things = [

    { type: 'apples', price: 15, prepared: 'fresh' },
    { type: 'bananas', price: 100, prepared: 'dried' },
    { type: 'kiwi', price: "null", prepared: 'fresh' },
    { type: 'pineapple', price: 404, preapred: "canned" },
    { type: 'cantalope', price: 10, prepared: 'pickled' },
    { type: 'oranges', price: 75, prepared: 'fresh' }
]


thingRouter.get('/', (req, res) => {
    res.send(things)
})

thingRouter.get('/search/type', (req, res) => {
    const type = req.query.type
    const filteredThings = things.filter(thing => thing.type === type)
    res.send(filteredThings)
})


module.exports = thingRouter