import React, { useRef, useEffect } from 'react'
import { motion } from "framer-motion";
import imageInto from '../assets/image_into.png'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from "react-intersection-observer";
import imgAbout from '../assets/image1.png'
import imgInto from '../assets/image_into.png'

import './About.css'
export default function About() {

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

    const [ref, inView] = useInView({
        triggerOnce: true, // แสดงผลครั้งเดียว
        threshold: 0.4,     // แสดงเมื่อ 50% ของ element เข้า viewport
    });

    return (
        <div>

            <Navbar />

            <div ref={boxRef} className="backgroundAbout">
                <div className="contentAbout">
                    <h1>About Page</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit enim accusantium natus inventore laudantium recusandae debitis voluptas ex eum porro, maxime omnis vero, nobis amet sunt reprehenderit consequuntur illo incidunt?</p>
                </div>
                <div className="imgAboutbox">
                    <img className="imgAbout" src={imgAbout} alt="" />
                </div>
            </div>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.2 }} >
                <div className="cardBox-container">
                    <div className="cardBox">
                        <div className="card">
                            <div className="imagecard">
                                <img src={imgInto} alt="" />
                            </div>
                            <div className="cardContent">
                                <h1>Topic</h1>
                                <p>Lorem ipsum dolor sit amet consectetur,</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="imagecard">
                                <img src={imgInto} alt="" />
                            </div>
                            <div className="cardContent">
                                <h1>Topic</h1>
                                <p>Lorem ipsum dolor sit amet </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>




            <Footer />
        </div>
    );
}
