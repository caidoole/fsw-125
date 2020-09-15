import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <div className='nav'>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='Killers'>Killers</Link>
            <Link className='link' to='AddNewKiller'>Add New Killer</Link>
        </div>
    )
}
export default NavBar