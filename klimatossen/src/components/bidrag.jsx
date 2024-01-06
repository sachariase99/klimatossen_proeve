import React from 'react'
import '../styles/bidrag/bidrag.css'
import checklist from '../assets/Icon-Checklist.png'
import spacer from '../assets/Spacer-03.png'

const Bidrag = () => {
  return (
    <div className='bidrag'>
      <h2>Hvordan kan jeg bidrage?</h2>
      <div className="grid">
        <div className="image">
          <img src={checklist} alt="Bidrag" />
        </div>
        <div className="text">
          <h3>Hvordan belaster du miljøet mindst muligt i dagligdagen?</h3>
          <p>-Dit forbrug overordnet herunder din produktion af affald, bidrager til<br />udledning af CO2</p>
          <p>-Fødevareproduktion har stor indflydelse på CO2 balancen, tænk over<br />dit valg i dagligdagen.</p>
          <p>-Din bolig og den måde du har indrettet dig påvirker miljøet.</p>
          <p>-Jordens skove og verdenshavene er den største "producent" af den<br />ilt, der er nødvendig, for liv på Jorden, som vi kender det.</p>
          <p>-Mennesket er den enlige faktor der har den største indflydelse på<br />CO2 -balancen på Jorden i dag!</p>
          <p>-Du kan påvirke CO2 balancen, både ved at ændre små ting i din<br />hverdag, eller ved aktivt deltage i kampen for et bedre miljø.</p>
          <p className="readmore">Læs mere</p>
        </div>
      </div>
      <img src={spacer} alt="Spacer" />
    </div>
  )
}

export default Bidrag
