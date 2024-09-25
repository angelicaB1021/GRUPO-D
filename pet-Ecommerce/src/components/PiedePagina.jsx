// Importamos React para usar JSX en el componente
import React from 'react';
// Importamos íconos de la librería react-icons (Facebook, Instagram, Teléfono, Correo)
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
// Definimos el componente funcional 'PiedePagina' que representa el footer (pie de página)
const PiedePagina = () => {
  return (
     // Definimos el elemento <footer> con estilos de fondo y color de texto personalizados
    <footer className="bg-[#f0ead2] text-[#6b8e23] p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} PetShop. Todos los derechos reservados.</p>
         {/* Sección que muestra el número de teléfono con un ícono */}
        <div className="flex items-center justify-center mt-2">
          <FaPhone className="mr-2" /> 
          <span>(123) 456-7890</span>
        </div>
        <div className="flex items-center justify-center mt-2">
          <FaEnvelope className="mr-2" />
          <span>petshop@gmail.com</span>
        </div>
        {/* Sección que incluye enlaces a redes sociales (Facebook e Instagram) */}
        <div className="flex justify-center mt-4 space-x-4">
          <a 
            href="https://facebook.com/petshop" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#6b8e23] hover:text-gray-700"
          >
            <FaFacebook size={24} />
          </a>
           {/* Enlace a la página de Instagram con el ícono de Instagram */}
          <a 
            href="https://instagram.com/petshop" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#6b8e23] hover:text-gray-700"
          >
            <FaInstagram size={24} />{/* Ícono de Instagram con tamaño 24px */}
          </a>
        </div>
        
        <p className="mt-4">
          <a href="/AcercaDeNosotros" className="text-[#6b8e23] underline">
            Acerca de Nosotros
          </a>
        </p>
      </div>
    </footer>
  );
};
// Exportamos el componente 'PiedePagina' para poder usarlo en otras partes de la aplicación
export default PiedePagina;