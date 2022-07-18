import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCart } from 'react-icons/bs'
import ProductNav from '../ProductNav/ProductNav'

import './Navbar.css'

export default function Navbar() {
    const [ showLinks, setShowLinks ] = useState(false)

    return (
        <div className='nav-container'>
            <nav>
                
                <button className='hamburger' onClick={() => setShowLinks(!showLinks)} >
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </button>

                <div className='nav-logo'>
                    <h3>audiophile</h3>
                </div>

                <div className='nav-links'>
                    <ul id={showLinks ? 'hidden' : ''}>

                        { !showLinks ?

                        <>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/headphones'>Headphones</Link>
                            </li>
                            <li>
                                <Link to='/speakers'>Speakers</Link>
                            </li>
                            <li>
                                <Link to='/earphones'>Earphones</Link>
                            </li>
                        </>

                        

                        :

                            <ProductNav />
                        }
                    </ul>

                    
                </div>

                <div className='nav-cart'>
                    <button><BsCart /></button>
                </div>

            </nav>
        </div>
    )
}
