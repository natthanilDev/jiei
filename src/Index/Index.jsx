import React, { useRef, useEffect } from 'react'
import './Index.css'
import { motion } from "framer-motion";
import imageInto from '../assets/image_into.png'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);
export default function Index() {

    const [ref, inView] = useInView({
        triggerOnce: true, // แสดงผลครั้งเดียว
        threshold: 1,     // แสดงเมื่อ 50% ของ element เข้า viewport
    });
    const boxRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            boxRef.current,
            { y: -90, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: boxRef.current,
                    start: 'top 80%',
                },
            }
        );
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center mt-10 text-2xl"
        >
            <div>
                <div ref={boxRef} className="container">
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
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration:1 }}
                        >
                            <h1 className='discriptionTopic'>Discription</h1>

                            <p className='discriptionContent'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus provident architecto perferendis, tenetur aperiam soluta laboriosam labore itaque voluptatum laborum quae voluptates optio accusantium numquam, magnam reprehenderit veritatis dolor molestiae!</p>
                        </motion.div>
                    </div>

                </div>




                <Footer />

            </div>
        </motion.div>
    )
}
