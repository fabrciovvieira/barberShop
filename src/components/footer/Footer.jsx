import React, {useLayoutEffect} from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import logoBarber from '../../assets/logoBarber.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Footer = () => {


  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      '.barberlogoFooter',
      { opacity: 0, x: -200, rotate: 0 },
      {
        opacity: 1,
        x: 0,
        rotate: 360,
        duration: 2,
        scrollTrigger: {
          // markers: true,
          trigger: '.barberlogoFooter',
          start: 'top 80%', 
          end: 'bottom 100%', 
          scrub: true, 
        },
      }
    );
  },[])


  return (
    <section className="footer">
      <div className="services">
        <h2>Venha nos conhecer</h2>
      </div>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14097.609357326544!2d-48.64680114258927!3d-27.950961879873635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9526d68a8dba3e7b%3A0x9dd96b823392efd5!2sGamboa%20Beach!5e0!3m2!1spt-BR!2sbr!4v1716403684501!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      >
      </iframe>
      <footer>
        <div className="footer-icons">
            <a href="#">
                <FaInstagram className='i'/>
            </a>
            <a href="#">
                <FaTiktok className='i'/>
            </a>
            <a href="#">
                <FaFacebook className='i'/>
            </a>
        </div>

        <div className='barberlogoFooter'>
            <img src={logoBarber} alt="logo da barbearia" />
        </div>

        <p>&copy;Copyright 2024 | Barber Shop - Todos os direitos reservados. </p>
      </footer>
    </section>
  );
};

export default Footer;
