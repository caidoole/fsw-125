import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Killer from './Killer'

function Killers() {
    const [killers, setKillers] = useState([])

    function getKiller() {
        axios.get('/killerData')
            .then(res => {
               setKillers(res.data)
            })
            .catch(err => console.log(err))
    }

    function deleteKiller(killerId) {
        axios.delete(`/killerData/${killerId}`)
            .then(res => {
                setKillers(prevKiller =>
                    prevKiller.filter(killerData =>
                        killerData._id !== killerId))
            })
            .catch(err => console.log(err))
    }

    function editKiller(updates, killerId) {
        axios.put(`/killerData/${killerId}`, updates)
            .then(res => {
                setKillers(prevKiller =>
                    prevKiller.map(killerData =>
                        killerData._id !== killerId ? killerData : res.data))
            })
            .catch(err => console.log(err))
    }

    function setEdit(killerId) {
        let tempKiller = [...killers]
        let index = killers.findIndex(killer => killer._id === killerId);
        if (tempKiller[index].isEditable === undefined || tempKiller[index].isEditable === false) {
            tempKiller[index] = { ...tempKiller[index], isEditable: true }
        } else {
            tempKiller[index] = { ...tempKiller[index], isEditable: false }
        }
        setKillers(tempKiller)
    }

    const killerData = killers.map(killer => {
        return (
            <Killer
                {...killer}
                key={killer._id}
                deleteKiller={deleteKiller}
                editKiller={editKiller}
                setEdit={setEdit}
                captured={killer.captured}
            />
        )
    })

    useEffect(() => {
        getKiller()
    }, [])

    return (
        <div>
            <h1  className='pageTitle'> Fractured List Of Killers:</h1>
            {killerData} 
        </div>
    )
}

export default Killers 