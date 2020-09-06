import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm.js'

function Bounty(props) {
    const { firstName, lastName, living, bountyAmount, type, _id } = props
    const [editSwitch, setEditSwitch] = useState(false)

    return (
        <div className='bountyCard'>
            {!editSwitch ?
                <>
                    <h1>Name: {firstName} {lastName}</h1>
                    <h2>Living: {living !== true ? "No" : "Yes"} </h2>
                    <h3>Price: ${bountyAmount}</h3>
                    <h4>Type: {type}</h4>
                    <button className='deleteButton' onClick={() => props.deleteBounty(_id)}>Remove</button>
                    <button className='editButton' 
                    onClick={() => setEditSwitch(prevEditSwitch => !prevEditSwitch)}>Edit</button>
                </>
                :
                <>
                    <AddBountyForm
                        firstName={firstName}
                        lastName={lastName}
                        living={living}
                        bountyAmount={bountyAmount}
                        type={type}
                        _id={_id}
                        buttonText="Submit Edit"
                        submit={props.editBounty}
                    />
                    <button className='cancelEditButton'
                     onClick={() => setEditSwitch(prevEditSwitch => !prevEditSwitch)}>Cancel</button>
                </>
            }
        </div>
    )
}
export default Bounty