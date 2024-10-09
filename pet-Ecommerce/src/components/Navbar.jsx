// Importamos React para poder usar JSX en este componente
import React from 'react'
// Importamos NavLink desde react-router-dom para la navegación entre las rutas de la aplicación
import { NavLink } from 'react-router-dom';
// Importamos el logo de la tienda desde la carpeta assets
import logo from '../assets/images/logo.png';

// Definimos el componente Navbar que representa la barra de navegación
const Navbar = () => {
  return (
     // Definimos el elemento <nav> con clases de Tailwind CSS para el fondo, sombras y el diseño general
    <nav className='bg-[#f0ead2] shadow-md h-25 overflow-hidden'>
      <div className='container flex items-center justify-between mx-auto'>
        
        {/* Sección del logo y nombre del negocio */}
      <div className='flex items-center'>
        {/* Mostramos el logo con la imagen importada */}
          <img src={logo} alt="PetShop Logo" className="h-40 mr-3 -my-4" />
          {/* Texto con el nombre de la tienda y estilo personalizado */}
          <div className='text-4xl font-bold text-[#6b8e23]'>PetShop</div>
        </div>
        {/* Sección de los enlaces de navegación */}
        <div className='space-x-8'>

           {/* Enlace a la página de inicio (Home) */}
          <NavLink 
            className={({ isActive }) => 
              `text-[2rem] text-[#6b8e23] hover:text-[#4c6b15] transition-colors ${isActive ? "font-bold border-b-2 border-[#4c6b15]" : ""}`
            }
            to={"/"}// Dirección de la ruta para Home
          >
            Home 
          </NavLink>
          <NavLink
            className={({ isActive }) => 
              `text-[2rem]  text-[#6b8e23] hover:text-[#4c6b15] transition-colors ${isActive ? "font-bold border-b-2 border-[#4c6b15]" : ""}`
            }
            to={"/categorias"}// Dirección de la ruta 
          >
            Categorías
          </NavLink>
          <NavLink
            className={({ isActive }) => 
              `text-[2rem] text-[#6b8e23] hover:text-[#4c6b15] transition-colors ${isActive ? "font-bold border-b-2 border-[#4c6b15]" : ""}`
            }
            to={"/Servicios"}// Dirección de la ruta 
          >
            Servicios
          </NavLink>
          <NavLink
            className={({ isActive }) => 
              `text-[2rem] text-[#6b8e23] hover:text-[#4c6b15] transition-colors ${isActive ? "font-bold border-b-2 border-[#4c6b15]" : ""}`
            }
            to={"/AcercaDeNosotros"}// Dirección de la ruta 
          >
            Acerca De Nosotros
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

{/* bg-[#f0ead2]: Color de fondo personalizado */}
{/* p-4: Padding de 1rem (16px) en todos los lados */}
{/* shadow-md: Sombra media para dar profundidad */}
{/* container: Contenedor responsive */}
{/* mx-auto: Margen automático horizontal para centrar */}
{/* flex: Habilita Flexbox */}
{/* justify-between: Espacia los elementos hijos uniformemente */}
{/* items-center: Alinea los elementos verticalmente al centro */}
{/* text-3xl: Tamaño de fuente de 3rem (48px) */}
{/* font-bold: Texto en negrita */}
{/* hover:text-[#4c6b15]: Cambia el color de texto al pasar el cursor */}
{/* transition-colors: Transición suave de colores */}
{/* isActive: Clase condicional basada en si el enlace está activo */}
{/* border-b-2: Borde inferior de 2px */}
{/* border-[#4c6b15]: Color del borde */}