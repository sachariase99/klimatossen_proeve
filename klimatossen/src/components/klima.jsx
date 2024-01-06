import React from 'react'
import '../styles/klima/klima.css'
import climate from '../assets/icon-climate.png'
import spacer from '../assets/Spacer-02.png'

const Klima = () => {
  return (
    <div className='klima'>
      <h2>Klima og Miljø?</h2>
      <div className="grid">
        <div className="image">
          <img src={climate} alt="Klima" />
        </div>
        <div className="text">
          <h3>Kort om klimaet og miljøet</h3>
          <p>-Klima og miljø hænger sammen.</p>
          <p>-Klimaforandringer påvirker miljøet og omvendt</p>
          <p>-Miljøet kan betragtes som en organisme, og er det vi baserer vores<br />liv og overlevelse på, hvis vi ændrer i miljøet, har det oftest en<br />dominoeffekt, der påvirker alle dele i miljøet.</p>
          <p>-Ændringer i atmosfærens CO2 og Ozonlag påvirker miljøet på hele<br />kloden, med ændringer i temperatur og nedbør som følge.</p>
          <p>-Ændrede temperaturer og nedbørsmønster påvirker ikke kun<br />kældre og infrastruktur, men også biodiversiteten som planter<br />insekter mm.</p>
          <p>-Din adfærd påvirker klimaet i størrer eller mindre grad.</p>
          <p className="readmore">Læs mere</p>
        </div>
      </div>
      <img src={spacer} alt="Spacer" />
    </div>
  )
}

export default Klima
