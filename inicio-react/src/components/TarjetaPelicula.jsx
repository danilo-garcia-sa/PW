export default function TarjetaPelicula({ titulo, año, vista }) {
  return (
    <div style={{ textAlign: 'center', padding: '10px', margin: '8px 0' }}>
      <h3>{titulo} {vista && '✓'}</h3>
      <p>Año: {año}</p>
    </div>
  )
}