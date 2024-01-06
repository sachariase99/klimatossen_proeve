    import React from 'react'
    import '../styles/co2/co2.css'
    import co2 from '../assets/icon-CO2.png'
    import spacer from '../assets/Spacer-01.png'

    const Co2 = () => {
        return (
            <div className='co2'>
                <h2>Hvad er Co2?</h2>
                <div className="grid">
                    <div className="image">
                        <img src={co2} alt="CO2" />
                    </div>
                    <div className="text">
                        <h3>CO2 er en gasart der findes naturligt i jordens atmosfære.</h3>
                        <p>-CO2, findes naturligt i atmosfæren.</p>
                        <p>-Livet, er afhængigt af CO2 da det regulerer temeraturen på jorden.</p>
                        <p>-CO2, dannes oftest ved at mennesker og dyr, indånder ilt, og<br />udånder CO2. Planter optager CO2, og omdanner det til ilt. Derved<br />opnåes en balance i CO2 "regnskabet".</p>
                        <p>-Afbrænding f.eks. af fossile brændstoffer, udleder CO2.</p>
                        <p>-Jordens skove og verdenshavene er den største "producent" af den<br />ilt, der er nødvendig, for liv på jorden, som vi kender det.</p>
                        <p>-Mennesket er den enlige faktor der har den største indflydelse på<br />CO2-balancen på jorden i dag!</p>
                        <p className="readmore">Læs mere</p>
                    </div>
                </div>
                <img src={spacer} alt="Spacer" />
            </div>
        )
    }

    export default Co2
