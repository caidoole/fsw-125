import React from 'react'
import AddBountyForm from './AddBountyForm.js'

function Bounty(props) {
    const { firstName, lastName, living, bountyAmount, type, _id, setEdit, isEditable } = props
    return (
        <div className='bountyCard'>
            {!isEditable ?
                <>
                    <h1>Name: {firstName} {lastName}</h1>
                    <h2>Living: {living !== true ? "No" : "Yes"} </h2>
                    <h3>Price: ${bountyAmount}</h3>
                    <h4>Type: {type}</h4>
                    <button className='deleteButton' onClick={() => props.deleteBounty(_id)}>Remove</button>
                    <button className='editButton' 
                    onClick={() => setEdit(_id)}>Edit</button>
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
                     onClick={() => setEdit(_id)}>Cancel</button>
                </>
            }
        </div>
    )
}
export default Bounty