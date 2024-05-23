import React, {useRef, useEffect} from 'react'
import logoBarber from '../../assets/logoBarber.png'
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";


import './Header.css'

const Header = () => {
    useEffect(() => {
        AOS.init();
    },[])


  return (
    <div className='bg-home'>
        <header>
            <nav className='header-content container'>
                <div className="header-icons">
                    <a href="#" data-aos="fade-down" data-aos-delay="200">
                        <FaInstagram className='i'/>
                    </a>
                    <a href="#" data-aos="fade-down" data-aos-delay="300">
                        <FaTiktok className='i'/>
                    </a>
                    <a href="#" data-aos="fade-down" data-aos-delay="400">
                        <FaFacebook className='i'/>
                    </a>
                </div>

                <motion.div 
                className="header-logo"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                    }
                }}>
                    <img src={logoBarber} alt="logo da barbearia" />
                </motion.div>

                <div data-aos="fade-down">
                    <a className='header-button' href="#">
                        Agendar Horário
                    </a>
                </div>
            </nav>
            <main className='hero container' data-aos="zoom-in">
                <h1>Do clássico ao moderno, nós temos o seu estilo.</h1>
                <p>Horário de funcionamento: segunda a sexta, das 9h às 18h.</p>
                <a className='button-contact' href="#" target='_blank'>
                    Agendar Horário
                </a>
            </main>
        </header>
    </div>
  )
}

export default Header