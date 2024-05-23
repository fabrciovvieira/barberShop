import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imageAbout from '../../assets/images.svg'


const About = () => {
  const el = useRef()
  const tl = useRef()

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() =>{
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: el.current,
          // markers: true,
          scrub: true,
          start: 'top 90%',
          end: 'bottom 98%'
        }
      })
      .fromTo('#imageAbout',{
        opacity: 0,
        x: -200
      },{
        opacity: 1,
        x: 0
      })
      .fromTo('.about-description',{
        opacity: 0,
        x: 1400
      },{
        opacity: 1,
        x: 0
      })
    })
  },[])


  return (
    <section className="about" ref={el}>
        <div className='container about-content'>
            <div id='imageAbout'>
                <img src={imageAbout} alt="Imagem sobre a barbearia" />
            </div>

            <div className='about-description'>
                <h2>Sobre Nós</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, porro accusantium quo repellat natus debitis et. Illum asperiores fuga reprehenderit nostrum iusto praesentium obcaecati eos neque beatae, voluptates voluptatibus officia.</p>
                <p>Horário de funcionamento: <strong>segunda</strong> a <strong>sexta</strong>, das <strong>9h</strong> às <strong>18h</strong>.</p>
            </div>
        </div>
    </section>
  )
}

export default About