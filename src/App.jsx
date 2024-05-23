import './App.css'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Services from './components/services/Services'

import wppIcont from './assets/whatssapp.svg'

function App() {

  return (
    <>
        <Header />
        <About />
        <Services />
        <Footer />
        <a 
        href="https://api.whatsapp.com/send?phone=5511000000000&text=Quero%20fazer%20um%20agendamento%20hoje!"
        class="btn-whatsapp"
        target="_blank"
        data-aos="zoom-in-up" data-aos-delay="400"
        >
          <img src={wppIcont} alt="Botao whatsapp" />
          <span class="tooltip-text">Agende seu horário</span>
        </a>
    </>
  )
}

export default App
