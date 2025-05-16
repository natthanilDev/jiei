import React from 'react'
import './NotFound.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function NotFound() {
    return (
        <div>
            <Navbar />
            <div className="pageNetFound">
                <p className='error404'>404</p>
                <p className='error404text'>Page Not Found</p>
            </div>
            

            <Footer />
        </div>
    )
}
