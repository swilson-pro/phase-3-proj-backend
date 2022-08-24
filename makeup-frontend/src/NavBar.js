import React from 'react'
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <div className='nav'>
            <NavLink className='NavButton' to='/'><button>Home</button></NavLink>
            <NavLink className='NavButton' to='/favorites'><button>Favorites</button></NavLink>
        </div>
    )
}

export default NavBar