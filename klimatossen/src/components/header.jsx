import React from 'react'
import '../styles/header/header.css'
import bgimg from '../assets/Bg-Hero-Blue.png'
import { Nav } from '../components'

const Header = () => {
    return (
        <header className='header'>
            <img src={bgimg} alt="Header Background" />
            <div className="text">
                <h1>Klima<span>tossen</span></h1>
                <h3>Klima-tossen.dk</h3>
            </div>
                <div className='p-text'>
                    <p>"Det er rigtigt, at vi hver især kun kan bidrage lidt<br />til den samlede løsning."</p>
                    <p>Lige så rigtigt er det, at vi slet ikke kan nå målet<br/>uden at hver især bidrager en smule til det."</p>
                </div>
                <Nav />
        </header>
    )
}

export default Header
