import React from 'react'
import EditKiller from './EditKiller'

function Killer(props) {
    const {
        nickname,
        name,
        yearsActive,
        confirmedDeaths,
        suspected,
        image,
        captured,
        _id,
        setEdit,
        deleteKiller,
        editKiller,
        isEditable } = props
    return (
        <div>
            {!isEditable ?
                <>
                <div className='killerCards'>
                    <h1>Nickname: {nickname}</h1>
                    <h2>Name: {name}</h2>
                    <h2>Years Active: {yearsActive}</h2>
                    <h2>Confirmed Deaths: {confirmedDeaths} </h2>
                    <h2>Suspected in: {suspected}</h2>
                    <img className='images' src={image} alt={nickname} />
                    <h2>Captured: {captured !== true ? "No" : "Yes"}</h2>
                    <button onClick={() => deleteKiller(_id)}> Delete</button>
                    <button onClick={() => setEdit(_id)}>Edit</button>
                    </div>
                </>
                :
                <>
                    <EditKiller
                        nickName={nickname}
                        name={name}
                        yearsActive={yearsActive}
                        confirmedDeaths={confirmedDeaths}
                        suspected={suspected}
                        image={image}
                        captured={captured}
                        _id={_id}
                        buttonText="submit edit"
                        submit={editKiller}
                    />
                    <button onClick={() => setEdit(_id)}>Cancel</button>
                </>
            }
        </div>
    )
}
export default Killer