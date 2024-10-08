// Importamos StrictMode desde React. StrictMode es una herramienta para destacar problemas potenciales en la aplicación
import { StrictMode } from 'react'
// Importamos la función createRoot desde 'react-dom/client' para renderizar el árbol de componentes en el DOM
import { createRoot } from 'react-dom/client'
// Importamos el componente principal App, que contiene toda la lógica y los componentes de la aplicación
import App from './App.jsx'
// Importamos el archivo de estilos CSS, que aplicará los estilos a toda la aplicación
import './index.css'
// Creamos la raíz en el elemento del DOM con el id "root" y renderizamos la aplicación
createRoot(document.getElementById('root')).render(
  // Envolvemos la aplicación en StrictMode para ayudar a detectar errores potenciales y advertencias en el desarrollo
  <StrictMode>
    {/* Renderizamos el componente principal App dentro de StrictMode */}
    <App />
  </StrictMode>,
)
