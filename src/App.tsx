// Importamos los módulos desde los paquetes y ubicaciones definidos
import React from 'react'
import InvoicePage from './components/InvoicePage'

// Definimos la función principal
function App() {
  return (
    <div className="app">
      <h1 className="center fs-30">Generador de Facturas React</h1>
      <InvoicePage />
    </div>
  )
}

// Exportamos nuestra función para poder usarla en index.tsx
export default App
