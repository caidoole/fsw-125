const express = require('express');
const killerRouter = express.Router();
const {v4: uuidv4} = require('uuid');
const killerData = require('../killerData/killers.json');

//GET all
killerRouter.get('/', (req,res, next) =>{
    res.send(killerData)
})

//GET one
    killerRouter.get('/:killerId', (req, res, next) => {
    const killerId = req.params.killerId
    const foundKiller = killerData.find(killerData => killerData._id === killerId)
    res.send(foundKiller)
}) 

//GET select
killerRouter.get('/search/nickname', (req, res, next) =>{
    const nickname  = req.query.nickname
    const filteredkillerData = killerData.filter(killerData => killerData.nickname === nickname)
    res.send(filteredkillerData)
})

killerRouter.post('/', (req, res, next) =>{
    const newKiller = req.body
    newKiller._id = uuidv4()
    killerData.push(newKiller)
    res.send(newKiller)
})

killerRouter.delete('/:killerId', (req, res, next) => {
    const killerId = req.params.killerId
    const killerIndex = killerData.findIndex(killerData => killerData._id === killerId)
    killerData.splice(killerIndex, 1)
    res.send('Killer has been removed from listing')
})

killerRouter.put('/:killerId', (req, res, next) => {
    const killerId = req.params.killerId
    const updatedObject = req.body
    const killerIndex = killerData.findIndex(killerData => killerData._id === killerId)
    const updatedKiller = Object.assign(killerData[killerIndex], updatedObject)
    res.send(updatedKiller)
})

module.exports = killerRouter