// Importamos los módulos desde los paquetes y ubicaciones definidas
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App' // Llamamos a nuestra función App definida en App.tsx
import './scss/main.scss'
import * as serviceWorker from './serviceWorker'

// Inicializamos el método render del módulo ReactDOM, que cargará nuestra aplicación
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
