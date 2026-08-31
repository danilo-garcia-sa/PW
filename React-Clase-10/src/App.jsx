import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Persona from './components/Persona'
import TarjetaPelicula from './components/TarjetaPelicula'
import Contador from './components/Contador'
import Acordeon from './components/Acordeon'
import Buscador from './components/Buscador'
import ListaCompras from './components/ListaCompras'

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

      {/* Ejercicio 4 — useState básico */}
      <section style={{ marginTop: '30px', textAlign: 'center' }}>
        <h2>Contador</h2>
        <Contador />
      </section>

      {/* Ejercicio 5 — Toggle */}
      <section style={{ marginTop: '30px', textAlign: 'center' }}>
        <h2>Acordeón</h2>
        <Acordeon
          titulo="¿Qué es React?"
          contenido="React es una librería de JavaScript para construir interfaces de usuario a partir de componentes."
        />
      </section>

      {/* Ejercicio 6 — Input controlado */}
      <section style={{ marginTop: '30px', textAlign: 'center' }}>
        <h2>Buscador de frutas</h2>
        <Buscador />
      </section>

      {/* Ejercicio 7 — Integrador */}
      <section style={{ marginTop: '30px', marginBottom: '40px', textAlign: 'center' }}>
        <h2>Lista de compras</h2>
        <ListaCompras />
      </section>
    </>
  )
}

export default App