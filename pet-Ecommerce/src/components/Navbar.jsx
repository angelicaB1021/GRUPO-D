import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className='bg-[#f0ead2] shadow-md h-25 overflow-hidden'>
      <div className='container mx-auto flex justify-between items-center'>
        
      <div className='flex items-center'>
          <img src={logo} alt="PetShop Logo" className="h-40 mr-3 -my-4" />
          <div className='text-4xl font-bold text-[#6b8e23]'>PetShop</div>
        </div>
        <div className='space-x-8'>
          <NavLink 
            className={({ isActive }) => 
              `text-[1.4rem] text-[#6b8e23] hover:text-[#4c6b15] transition-colors ${isActive ? "font-bold border-b-2 border-[#4c6b15]" : ""}`
            }
            to={"/"}
          >
            Home 
          </NavLink>
          <NavLink
            className={({ isActive }) => 
              `text-[1.4rem]  text-[#6b8e23] hover:text-[#4c6b15] transition-colors ${isActive ? "font-bold border-b-2 border-[#4c6b15]" : ""}`
            }
            to={"/categorias"}
          >
            Categorías
          </NavLink>
          <NavLink
            className={({ isActive }) => 
              `text-[1.4rem] text-[#6b8e23] hover:text-[#4c6b15] transition-colors ${isActive ? "font-bold border-b-2 border-[#4c6b15]" : ""}`
            }
            to={"/Servicios"}
          >
            Servicios
          </NavLink>
          <NavLink
            className={({ isActive }) => 
              `text-[1.4rem] text-[#6b8e23] hover:text-[#4c6b15] transition-colors ${isActive ? "font-bold border-b-2 border-[#4c6b15]" : ""}`
            }
            to={"/AcercaDeNosotros"}
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