import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Persona from './components/Persona'
import TarjetaPelicula from './components/TarjetaPelicula'

const peliculas = [
  { id: 1, titulo: "Interstellar",     año: 2014, vista: false },
  { id: 2, titulo: "The Dark Knight",  año: 2008, vista: true  },
  { id: 3, titulo: "Inception",        año: 2010, vista: false },
  { id: 4, titulo: "Oppenheimer",      año: 2023, vista: true  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Persona nombre="Danilo" apellido="Garcia Sa" />

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      {/* Sección del Ejercicio 3 sin bordes y centrada */}
      <section style={{ marginTop: '30px', textAlign: 'center' }}>
        <h2>Mis Películas</h2>
        {peliculas.map((peli) => (
          <TarjetaPelicula key={peli.id} {...peli} />
        ))}
      </section>
    </>
  )
}

export default App