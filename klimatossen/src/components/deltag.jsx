import React from 'react'
import '../styles/deltag/deltag.css'
import arrangement from '../assets/Icon-Arrangement.png'

const Deltag = () => {
  return (
    <div className='deltag'>
      <h2>Deltag i arrangement</h2>
      <div className="grid">
        <div className="image">
          <img src={arrangement} alt="Deltag" />
        </div>
        <div className="text">
          <h3>Deltag i et af vores arrangementer og gør en forskel!</h3>
          <p>-“Combing” (”at fjerne affald”, f.eks. beachcombing: , rense stranden for<br />affald og elementer der ikke hører hjemme her).  Invester en dag med<br />familien i naturen og sammen med andre.</p>
          <p>-Tilmeld dig et arrangement i dit område</p>
          <p>-Tag ansvar hjælp dit nærområde og os alle sammen generelt.</p>
          <p>-Mød nye mennesker omkring en fælles opgave.</p>
          <p>-Tag famillien med på en dag for naturen og vores fremtid..</p>
          <p>-Tilmeld dig et af vore arrangementer, eller modtag<br />information om Klimatossen!</p>
          <p className="readmore">Læs mere</p>
        </div>
      </div>
    </div>
  )
}

export default Deltag
