import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Bounty from './componets/Bounty'
import AddBountyForm from './componets/AddBountyForm'
import Header from './componets/Header.js'
import Footer from './componets/Footer'
import './style.css'

function App() {
  const [bounty, setBounty] = useState([])

  function getBounty() {
    axios.get('/bounty')
      .then(res => setBounty(res.data))
      .catch(err => console.log(err))
  }

  function addBounty(newBounty) {
    axios.post('/bounty', newBounty)
      .then(res => {
        setBounty(prevBounty => [res.data, ...prevBounty])
      })
      .catch(err => console.log(err))
  }

  function deleteBounty(bountyId) {
    axios.delete(`/bounty/${bountyId}`)
      .then(res => {
        setBounty(prevBounty => prevBounty.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => (err))
  }

  function editBounty(updates, bountyId) {
    axios.put(`/bounty/${bountyId}`, updates)
      .then(res => {
        setBounty(prevBounty =>
          prevBounty.map(bounty =>
            bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => (console.log(err)))
  }

  function setEdit(bountyId) {
    let tempBounty = [...bounty]
    let index = bounty.findIndex(x => x._id === bountyId);
    if (tempBounty[index].isEditable === undefined || tempBounty[index].isEditable === false) {
      tempBounty[index] = { ...tempBounty[index], isEditable: true }
    } else {
      tempBounty[index] = { ...tempBounty[index], isEditable: false }
    }
    setBounty(tempBounty)
  }

  const bountyData = bounty.map(bounty => {
    return (
      <Bounty {...bounty}
        key={bounty._id}
        deleteBounty={deleteBounty}
        editBounty={editBounty}
        setEdit={setEdit}
      />
    )
  })

  useEffect(() => {
    getBounty()
  }, [])

  return (
    <div className="App">
      <Header />
      <AddBountyForm
        submit={addBounty}
        buttonText="Add Bounty"
      />
      {bountyData}
      <Footer />
    </div>
  );
}

export default App;
