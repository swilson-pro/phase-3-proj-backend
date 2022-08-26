import React from 'react'
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <nav className='nav'>
            <a >
                <img className="nav-logo" src="./beauty-treatment.png" alt="beauty logo"></img>
                <div className="site-title">Makeup Analyzer</div>
            </a>
            <ul>
                <NavLink className="NavButton" to='/'><button>Home</button></NavLink>
                <NavLink className='NavButton' to='/favorites'><button>Favorites</button></NavLink>
                <NavLink className='NavButton' to='/myproducts'><button>My Products</button></NavLink>
                <NavLink className='NavButton' to='/newproductform'><button>Create New Product</button></NavLink>
            </ul>
        </nav>
    )
}

export default NavBar