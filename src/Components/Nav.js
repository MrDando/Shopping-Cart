import React from 'react'

import { Link } from 'react-router-dom'

function Nav() {
    return (
        <header className='main-header flex align-center'>
            <div className='logo'>
                <Link className='nav-link' to='/'><h1>Home</h1></Link>
            </div>
            <nav>
                <ul className='nav-links'>
                    <li><Link className='nav-link' to='/shop'>Shop</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav