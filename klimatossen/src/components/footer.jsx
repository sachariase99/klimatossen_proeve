import React from 'react'
import '../styles/footer/footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="grid">
                <div className='about'>
                    <h3>KlimaTossen NPO</h3>
                    <p>Vesterbrogade 92</p>
                    <p>9000 Aalborg</p>
                    <p>info@klima-tossen.dk</p>
                    <p>9922 3344 (Åben man - fre: 08.00 - 16.00)</p>
                    <h2>Samarbejdspartnere:</h2>
                    <div className="links">
                        <a href="#">https://www.dn.dk/</a>
                        <a href="#">http://www.miljoeportal.dk</a>
                    </div>
                    <h1>Klima<span>tossen</span></h1>
                </div>
                <div className='form'>
                    <h3>Ja tak! Jeg vil gerne høre mere.</h3>
                    <input type="text" placeholder='Fulde navn' />
                    <input type="text" placeholder='Hjem by' />
                    <input type="email" placeholder='Email adresse' />
                    <input type="tel" placeholder='Telefon nummer' />
                    <div>
                        <p>Få en samtale med Klimatossen</p>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <p>Modtag Nyhedsbrev</p>
                        <input type="checkbox" />
                    </div>
                    <input type="submit" value="Send" />
                </div>
            </div>
        </footer>
    )
}

export default Footer
