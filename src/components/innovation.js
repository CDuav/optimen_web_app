import React from 'react'
import Footer from '../layouts/footer';
import '../App.css';

const Innovation = () => {
  return (
    <div className='innovation'>
      <div className='contenedor_innovation'>
      <img
        className='img-innovation'
        src={('../img/innovation/Hannover_Messe.png')}
        alt='Logo_Hannover_Messe'/>
        <div className='contenedor-info_innnovation'>
          <p className='nombre-empresa'> Hannover Messe - Empresa  </p>
          <p> La Familia optimen Presenta la "Transformación Industrial de Mexico, Hannover Messe" </p>
          <p> Hannover Messe es la plataforma internacional mas importantes y el púnto  para la transformación Industrial </p>
          <p> Hannover Messe es una empresa organizadora de ferias y eventos especializados en tecnología industrial y manufacturera. La empresa organiza la feria industrial más grande del mundo, la Hannover Messe, que se celebra anualmente en Hannover, Alemania</p>
          <p>24/Junio/2020</p>
        </div>
     </div>

     <div className='contenedor_innovation'>
      <img
        className='img-innovation'
        src={('../img/innovation/Hannover_Messe.png')}
        alt='Logo_Hannover_Messe'/>
        <div className='contenedor-info_innnovation'>
          <p className='nombre-empresa'> Hannover Messe - Empresa  </p>
          <p> La Familia optimen Presenta la "Transformación Industrial de Mexico, Hannover Messe" </p>
          <p> Hannover Messe es la plataforma internacional mas importantes y el púnto  para la transformación Industrial </p>
          <p> Hannover Messe es una empresa organizadora de ferias y eventos especializados en tecnología industrial y manufacturera. La empresa organiza la feria industrial más grande del mundo, la Hannover Messe, que se celebra anualmente en Hannover, Alemania</p>
          <p>24/Junio/2020</p>
        </div>
     </div>
     <Footer/>
    </div>
    
  )
}

export default Innovation
