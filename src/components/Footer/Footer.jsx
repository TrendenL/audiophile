import { Link } from 'react-router-dom'

import './Footer.css'

export default function Footer() {
  return (
    <div className='footer-container'>
        <footer>
                <div className='footer-content'>
                    <div className='footer-logo'>
                        <h3>audiophile</h3>
                    </div>

                    <p className='footer-paragraph'>
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                    </p>

                    <p className='copyright'>
                        Copyright 2022. All Rights Reserved
                    </p>

                </div>

                <div className='footer-links'>
                    <ul>
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
                    </ul>
                </div>
        </footer>            
    </div>
  )
}
