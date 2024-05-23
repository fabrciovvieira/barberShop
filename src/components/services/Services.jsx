import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
import corte1 from '../../assets/corte1.png';
import corte2 from '../../assets/corte2.png';
import corte3 from '../../assets/corte3.png';


const Services = () => {
  const el = useRef();
  const tl = useRef();

  useEffect(() => {
    AOS.init();
},[])

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: el.current,
                scrub: true,
                // markers: true,
                start: "top 580px",
                end: "bottom 680px"
            }
        })
        .fromTo('#haircut-1', {
            opacity: 0,
            y: 160
        },{
            opacity: 1,
            y: 0
        })
        .fromTo('#haircut-2', {
            opacity: 0,
            y: 160
        },{
            opacity: 1,
            y: 0
        })
        .fromTo('#haircut-3', {
            opacity: 0,
            y: 160
        },{
            opacity: 1,
            y: 0
        })
    }, el)
    return () => {
        gsap.killTweensOf(".services")
    }
},[])
  return (
    <section className="services" ref={el}>
      <div className='services-content container'>
        <h2 data-aos="fade-right" data-aos-delay="300">Serviços</h2>
        <p data-aos="fade-left" data-aos-delay="300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores officia tempore? Voluptate at esse debitis odit vero perferendis vel maxime rerum voluptatibus reprehenderit minima.</p>
      </div>
          <div className="prices">
            <div className="haircut" id='haircut-1'>
              <img src={corte1} alt="tipo de corte" />
              <div className="haircut-price">
                <strong>Corte Normal</strong>
                <button>
                  <span className='defaultPrice'>R$45,00</span>
                  <span className='hoverPrice'>Agendar</span>
                </button>
              </div>
            </div>
            <div className="haircut" id='haircut-2'>
              <img src={corte2} alt="tipo de corte" />
              <div className="haircut-price">
                <strong>Barba Completa</strong>
                <button>
                  <span className='defaultPrice'>R$35,00</span>
                  <span className='hoverPrice'>Agendar</span>
                </button>
              </div>
            </div>
            <div className="haircut" id='haircut-3'>
              <img src={corte3} alt="tipo de corte" />
              <div className="haircut-price">
                <strong>Corte e Barba</strong>
                <button>
                  <span className='defaultPrice'>R$75,00</span>
                  <span className='hoverPrice'>Agendar</span>
                </button>
              </div>
            </div>
          </div>
    </section>
  );
};

export default Services;
