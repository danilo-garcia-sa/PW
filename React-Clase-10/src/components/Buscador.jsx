import { useState } from 'react'

const FRUTAS = ['manzana', 'pera', 'naranja', 'banana', 'kiwi', 'mango']

export default function Buscador() {
  const [texto, setTexto] = useState('')

  const frutasFiltradas = FRUTAS.filter((fruta) =>
    fruta.toLowerCase().includes(texto.toLowerCase())
  )

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto' }}>
      <input
        type="text"
        placeholder="Buscar fruta..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <ul style={{ textAlign: 'left' }}>
        {frutasFiltradas.map((fruta) => (
          <li key={fruta}>{fruta}</li>
        ))}
      </ul>
    </div>
  )
}
