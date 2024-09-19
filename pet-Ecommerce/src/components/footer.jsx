// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f0ead2] text-[#6b8e23] p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} PetShop. Todos los derechos reservados.</p>
        <div className="flex justify-center mt-2 items-center">
          <FaPhone className="mr-2" /> 
          <span>(123) 456-7890</span>
        </div>
        <div className="flex justify-center mt-2 items-center">
          <FaEnvelope className="mr-2" />
          <span>petshop@gmail.com</span>
        </div>

        <div className="flex justify-center mt-4 space-x-4">
          <a 
            href="https://facebook.com/petshop" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#6b8e23] hover:text-gray-700"
          >
            <FaFacebook size={24} />
          </a>
          <a 
            href="https://instagram.com/petshop" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#6b8e23] hover:text-gray-700"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        
        <p className="mt-4">
          <a href="/acerca-de-nosotros" className="text-[#6b8e23] underline">
            Acerca de Nosotros
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

