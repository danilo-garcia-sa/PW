import { useState } from 'react'

export default function Acordeon({ titulo, contenido }) {
  const [abierto, setAbierto] = useState(false)

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
      <div
        onClick={() => setAbierto(!abierto)}
        style={{
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          fontWeight: 600,
          padding: '8px 0',
        }}
      >
        <span>{titulo}</span>
        <span>{abierto ? '▲' : '▼'}</span>
      </div>
      {abierto && <p>{contenido}</p>}
    </div>
  )
}
