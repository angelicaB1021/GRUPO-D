import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <NavLink 
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/"}
      >
        Home 
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/categorias"}
      >
        categorias
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/Servicios"}
      >
        Servicios
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/AcercaDeNosotros"}
      >
        Acerca De Nosotros
      </NavLink>
    </nav>
  )
}
export default Navbar;