import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    const location = useLocation().pathname
    return (
        <nav>
            <div className="navbar">
                <div className="container_box">
                    <div className="container-navbar">
                        <div className="navbar_box">
                            <div className="navlogo">
                                <p>JIEI(THAILAND).CO.LTD</p>
                            </div>
                            <div className="navlink">
                                <label className='labelmenu' htmlFor="menuBox"><i class="bi bi-three-dots-vertical"></i></label>
                                <input type="checkbox" id="menuBox" />
                                <div className="moblie">
                                    <ul className="list_navbar">
                                        <label className='labelmenu-close' htmlFor="menuBox"><i class="bi bi-x-lg"></i></label>
                                        <Link to="/">
                                            <li className={location == '/' ? "lilink active":"lilink"}>HOME</li>
                                        </Link>
                                        <Link to="/about">
                                            <li className={location == '/about' ? "lilink active":"lilink"}>ABOUT</li>
                                        </Link>
                                        <Link to="/news">
                                            <li className={location == '/news' ? "lilink active":"lilink"}>NEWS</li>
                                        </Link>
                                        <Link to="/contact">
                                            <li className={location == '/contact' ? "lilink active":"lilink"}>CONTACT</li>
                                        </Link>
                                        <Link to="/">
                                            <button className='signup'>Sign Up</button>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
