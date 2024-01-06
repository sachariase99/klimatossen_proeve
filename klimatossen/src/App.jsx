import { useState } from 'react'
import './styles/app/app.css'
import { Header, Quote, Bidrag, Co2, Deltag, Klima, Footer } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Quote />
    <Co2 />
    <Klima />
    <Bidrag />
    <Deltag />
    <Footer />
    </>
  )
}

export default App
