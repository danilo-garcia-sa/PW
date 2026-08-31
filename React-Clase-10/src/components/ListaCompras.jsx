import { useState } from 'react'

export default function ListaCompras() {
  const [items, setItems] = useState([])
  const [texto, setTexto] = useState('')

  const agregarItem = () => {
    const nombre = texto.trim()
    if (nombre === '') return
    setItems([...items, { id: Date.now(), nombre, comprado: false }])
    setTexto('')
  }

  const toggleComprado = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, comprado: !item.comprado } : item
      )
    )
  }

  const eliminarItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') agregarItem()
  }

  const faltantes = items.filter((item) => !item.comprado).length

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
      <div style={{ textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Nuevo ítem..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={handleKeyDown}
        />{' '}
        <button type="button" onClick={agregarItem}>Agregar</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '16px' }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '4px 0' }}
          >
            <input
              type="checkbox"
              checked={item.comprado}
              onChange={() => toggleComprado(item.id)}
            />
            <span
              style={{
                flex: 1,
                textDecoration: item.comprado ? 'line-through' : 'none',
                color: item.comprado ? '#999' : 'inherit',
              }}
            >
              {item.nombre}
            </span>
            <button type="button" onClick={() => eliminarItem(item.id)}>✕</button>
          </li>
        ))}
      </ul>

      <p style={{ textAlign: 'center' }}>
        {faltantes === 0
          ? items.length === 0
            ? 'No hay ítems en la lista.'
            : '¡Ya compraste todo! 🎉'
          : `Faltan comprar ${faltantes} ítem${faltantes === 1 ? '' : 's'}.`}
      </p>
    </div>
  )
}
