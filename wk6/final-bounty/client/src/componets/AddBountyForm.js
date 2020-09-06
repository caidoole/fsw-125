import React, { useState } from 'react'

function AddBountyForm(props) {
    const initInputs = {
        firstName: props.firstName || '',
        lastName: props.lastName ||  '',
        living: props.living || false,
        bountyAmount: props.bountyAmount ||  '',
        type: props.type || ''
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }
    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form className='inputForm' onSubmit={handleSubmit} >
            <h1>Input New Bounty Here:</h1>
            <input
                type='text'
                name='firstName'
                value={inputs.firstName}
                onChange={handleChange}
                placeholder='First Name'
            />
            <br />
            <input
                type='text'
                name='lastName'
                value={inputs.lastName}
                onChange={handleChange}
                placeholder='Last Name'
            />
<br />
            <input
                type='number'
                name='bountyAmount'
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder='Bounty Price'
            />
            <br />
            <input
                type='text'
                name='type'
                value={inputs.type}
                onChange={handleChange}
                placeholder='Jedi or Sith'
            />
            <br />
              <label  className='livingBox'>Among The Living?</label>
            <input
          
                type='checkbox'
                name='living'
                checked= {inputs.living}
                onChange={handleChange}
            />
            <br />
            <button className='submitButton'>{props.buttonText}</button>
        </form>
    )
}

export default AddBountyForm