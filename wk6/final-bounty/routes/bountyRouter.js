const express = require('express');
const bountyRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const bounty = [
    { firstName: 'Oola', lastName: 'Unknown', living: false, bountyAmount: 2000, type: 'jedi', _id: uuidv4() },
    { firstName: 'Qira', lastName: 'Unknown', living: false, bountyAmount: 5000, type: 'jedi', _id: uuidv4() },
    { firstName: 'Ponda', lastName: 'Baba', living: true, bountyAmount: 500, type: 'jedi', _id: uuidv4() },
    { firstName: 'Max ', lastName: 'Rebo', living: true, bountyAmount: 100, type: 'jedi', _id: uuidv4() },
    { firstName: 'Enfys', lastName: 'Nest', living: false, bountyAmount: 2000, type: 'sith', _id: uuidv4() },
    { firstName: 'Wicket', lastName: 'Warrick', living: true, bountyAmount: 50000, type: 'jedi', _id: uuidv4() },
    { firstName: 'Qui-Gon', lastName: 'Jinn', living: false, bountyAmount: 100000, type: 'jedi', _id: uuidv4() },
    { firstName: 'Chewbacca', lastName: 'Unknown', living: true, bountyAmount: 500000, type: 'jedi', _id: uuidv4() },
    { firstName: 'Jabba', lastName: 'Hut', living: false, bountyAmount: 5, type: 'sith', _id: uuidv4() },
    { firstName: 'Darth', lastName: 'Maul', living: false, bountyAmount: 15, type: 'sith', _id: uuidv4() },

]

bountyRouter.get('/', (req, res) => {
    res.send(bounty)

})

bountyRouter.post('/', (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounty.push(newBounty)
    console.log(req)
    res.send(newBounty)
})

bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)
    bounty.splice(bountyIndex, 1)
    res.send('Bounty Has Been Removed')
})

bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const updatedObject = req.body
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounty[bountyIndex], updatedObject)
    res.send(updatedBounty)
})

module.exports = bountyRouter