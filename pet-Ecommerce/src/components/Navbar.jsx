import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-[#f0ead2] p-4 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-3xl font-bold text-[#6b8e23]'>PetShop</div>
        <div className='space-x-6'>
          <NavLink 
            className={({ isActive }) => 
              `text-lg text-[#6b8e23] hover:text-[#4c6b15] transition-colors ${isActive ? "font-bold border-b-2 border-[#4c6b15]" : ""}`
            }
            to={"/"}
          >
            Home 
          </NavLink>
          <NavLink
            className={({ isActive }) => 
              `text-lg text-[#6b8e23] hover:text-[#4c6b15] transition-colors ${isActive ? "font-bold border-b-2 border-[#4c6b15]" : ""}`
            }
            to={"/categorias"}
          >
            Categorías
          </NavLink>
          <NavLink
            className={({ isActive }) => 
              `text-lg text-[#6b8e23] hover:text-[#4c6b15] transition-colors ${isActive ? "font-bold border-b-2 border-[#4c6b15]" : ""}`
            }
            to={"/Servicios"}
          >
            Servicios
          </NavLink>
          <NavLink
            className={({ isActive }) => 
              `text-lg text-[#6b8e23] hover:text-[#4c6b15] transition-colors ${isActive ? "font-bold border-b-2 border-[#4c6b15]" : ""}`
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