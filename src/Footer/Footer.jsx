import React from 'react'
import './Footer.css'
import { Link ,useLocation} from 'react-router-dom'
import Logo from "../assets/logo.png"
export default function Footer() {
    const location = useLocation().pathname
    return (
        <footer>
            <div className="footerBox">
                <div className="boxContent">
                    <p>JIEI(THAILAND).CO.LTD</p>
                </div>
                <div className="content">
                    <p>IT Department</p>
                </div>
            </div>

            <div className="boxlinkContact">


                <div className="boximgeLOGO">
                    <img src={Logo} alt="" />
                </div>
                <div className="boxlink">
                    <ul className='linkbox'>
                        <Link to={'/'} >
                            <li className={location == '/' ? "active":""}>HOME</li>
                        </Link>
                        <Link to={'/about'} >
                            <li className={location == '/about' ? "active":""}>ABOUT</li>
                        </Link>
                        <Link to={'/news'}>
                            <li className={location == '/news' ? "active":""}>NEWS</li>
                        </Link>
                        <Link to={'/contact'} >
                            <li className={location == '/contact' ? "active":""}>CONTACT</li>
                        </Link>

                    </ul>
                </div>
            </div>
            <div className="areaFooter">
                <p>Copyright © 2025 JIEI. สงวนสิทธิ์ทุกประการ</p>
            </div>
        </footer>
    )
}
