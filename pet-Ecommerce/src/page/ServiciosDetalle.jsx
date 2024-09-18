// src/pages/ServiciosDetalle.jsx
import React from "react";
import { useParams } from 'react-router-dom';

// Datos de ejemplo para servicios
const serviciosData = [
  {
    id: '1',
    title: 'Pet Spa',
    description: 'Ofrecemos servicios completos de grooming para mantener a tu mascota limpia y saludable.',
    details: 'Incluye un baño completo, corte de pelo, limpieza de oídos y corte de uñas. Usamos productos especiales para cada tipo de pelaje.',
    features: ['Baño completo', 'Corte de pelo', 'Limpieza de oídos', 'Corte de uñas'],
    image: 'https://comoeducarauncachorro.com/blog/wp-content/uploads/144.jpg', 
  },
  {
    id: '2',
    title: 'Consulta Veterinaria',
    description: 'Consulta con nuestros veterinarios expertos para el cuidado general de tu mascota.',
    details: 'Ofrecemos exámenes de salud generales, vacunaciones necesarias y asesoramiento para el cuidado de tu mascota. Nuestros veterinarios están altamente capacitados.',
    features: ['Exámenes de salud', 'Vacunaciones', 'Tratamientos médicos', 'Asesoramiento'],
    image: 'https://th.bing.com/th/id/R.b3b53f3ca00c05f1393a95b93c1229fd?rik=%2bm%2f0BFq7oNLfSw&riu=http%3a%2f%2fucsm.dev.pinkxel.com%2fwp-content%2fuploads%2f2020%2f10%2fVeterinaria-scaled.jpg&ehk=akPCeepWvjMYPRiKPwgeFMRLa3whxH0dnx2WegUsL6k%3d&risl=&pid=ImgRaw&r=0', 
  },
  {
    id: '3',
    title: 'Entrenamiento para Mascotas',
    description: 'Ofrecemos clases de obediencia y entrenamiento personalizado para tu mascota. Ayudamos a mejorar su comportamiento y fortalecer el vínculo entre tú y tu amigo peludo.',
    features: ['Clases de obediencia básica', 'Entrenamiento avanzado', 'Modificación de conducta', 'Consultas individuales'],
    image: 'https://einfachtierisch.de/media/cache/article_content/cms/2015/04/shetland-sheepdog-dreifarbig-shutterstock-AMusicorio.jpg', 
  },
  {
    id: '4',
    title: 'Guardería para Mascotas',
    description: 'Ofrecemos un lugar seguro y divertido para que tu mascota pase el día mientras estás ocupado. Proporcionamos actividades y cuidados para que se sienta como en casa.',
    features: ['Espacios de juego supervisados', 'Actividades y entretenimiento', 'Alimentación según las necesidades', 'Atención personalizada'],
    image: 'https://th.bing.com/th/id/R.da7c54ea453edc064094de4115a44aea?rik=G76uw1Q%2b%2bwg0bg&pid=ImgRaw&r=0&sres=1&sresct=1', 
  },
  // Agregar más servicios según sea necesario
];

export const ServiciosDetalle = () => {
  const { id } = useParams();
  const servicio = serviciosData.find((s) => s.id === id);

  return (
    <div className="p-6 bg-gray-100">
      <div className="container p-6 mx-auto bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-[#6b8e23] mb-4">{servicio.title}</h1>
        <img
          src={servicio.image}
          alt={servicio.title}
          className="w-full h-auto mb-4 rounded-lg"
        />
        <p className="mb-4 text-lg text-gray-700">{servicio.details}</p>
        <h2 className="text-2xl font-semibold text-[#4c6b15] mb-3">Características</h2>
        <ul className="pl-5 list-disc">
          {servicio.features.map((feature, idx) => (
            <li key={idx} className="mb-2 text-gray-600">{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
