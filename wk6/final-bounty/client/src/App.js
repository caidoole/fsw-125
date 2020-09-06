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

  useEffect(() => {
    getBounty()
  }, [])

  return (
    <div className="App">
      <Header />
{/* <img className='topImage' src='https://i.imgur.com/v6ptCxB.jpg?1' alt='logo' /> */}
      <AddBountyForm
        submit={addBounty}
        buttonText="Add Bounty"
      />
      {bounty.map(bounty =>
        <Bounty {...bounty}
          key={bounty._id}
          deleteBounty={deleteBounty}
          editBounty={editBounty}
        />)}
        <Footer />
    </div>
  );
}

export default App;
