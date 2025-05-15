import React from 'react'
import './Index.css'
import imageInto from '../assets/image_into.png'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function Index() {
    return (
        <div>
            <div className="container">
                <div className="index_box">
                    <div className="index_logo">
                        <p className='companyname'>JIEI(THAILAND).CO.LTD</p>
                    </div>

                    <div className="content_box">
                        <p className='departnamename'>IT Department</p>
                    </div>
                </div>
                <div className="into_box">
                    <div className="content_into_box">
                        <p>News and Information from the IT Department</p>
                        <Link to={'/'}><button className='btn_into'>Information from the IT Department</button></Link>
                    </div>
                    <div className="into_image">
                        <img src={imageInto} alt="" className="image_into" />
                    </div>
                </div>
            </div>
            <Navbar />


            <div className="backgroundindex">
                <div className="contantintoonbackground">
                    <h1 className='discriptionTopic'>Discription</h1>

                    <p className='discriptionContent'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus provident architecto perferendis, tenetur aperiam soluta laboriosam labore itaque voluptatum laborum quae voluptates optio accusantium numquam, magnam reprehenderit veritatis dolor molestiae!</p>
                </div>
            </div>

            <Footer />

        </div>
    )
}
