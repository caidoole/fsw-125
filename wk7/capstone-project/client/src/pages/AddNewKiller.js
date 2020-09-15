import React, { useState } from 'react'
import axios from 'axios'

function AddNewKiller(props) {

    const initInputs = {
        nickname: props.nickName || '',
        name: props.name || '',
        yearsActive: props.yearsActive || '',
        confirmedDeaths: props.confirmedDeaths || '',
        suspected: props.suspected || '',
        image: props.image || '',
        captured: props.captured || false,
        isEditable: props.isEditable || false,
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
        axios.post('/killerData', inputs)
            .then(res => {
                setInputs(initInputs)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='addForm'>
            <h1 className='formTitle'>WANTED!</h1>
            <form className='inputKiller' onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='nickname'
                    placeholder='Nickname'
                    value={inputs.nickname}
                    onChange={handleChange}
                />
                <br />
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={inputs.name}
                    onChange={handleChange}
                />
                <br />
                <input
                    type='number'
                    name='yearsActive'
                    placeholder='Years Active'
                    value={inputs.yearsActive}
                    onChange={handleChange}
                />
                <br />
                <input
                    type='number'
                    name='confirmedDeaths'
                    placeholder='Confirmed Deaths'
                    value={inputs.confirmedDeaths}
                    onChange={handleChange}
                />
                <br />
                <input
                    type='number'
                    name='suspected'
                    placeholder='Suspected'
                    value={inputs.suspected}
                    onChange={handleChange}
                />
                <br />
                <input
                    type='img'
                    name='image'
                    placeholder='Add Image'
                    value={inputs.image}
                    onChange={handleChange}
                />
                <br />
                <label>Captured?</label>
                <input
                    type='checkbox'
                    name='captured'
                    checked={inputs.captured}
                    onChange={handleChange}
                />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddNewKiller