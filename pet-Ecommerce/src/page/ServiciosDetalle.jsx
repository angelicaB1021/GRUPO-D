import React from "react";
import { useParams } from 'react-router-dom';
import './ServiciosDetalle.css'; 

// Datos de ejemplo para servicios
const serviciosData = [
  {
    id: '1',
    title: 'Pet Spa',
    description: 'Ofrecemos servicios completos de grooming para mantener a tu mascota limpia y saludable.',
    details: `Nuestro Pet Spa ofrece una experiencia única para tu mascota, asegurando su comodidad y bienestar. 
    Incluye un baño completo con productos especiales, un corte de pelo adaptado a su raza, limpieza de oídos, 
    y corte de uñas. Además, contamos con un área de relajación post-grooming donde tu mascota puede descansar. 
    Nuestro equipo de profesionales está altamente capacitado para hacer que cada visita sea una experiencia placentera.`,
    features: [
      'Baño completo con productos hipoalergénicos',
      'Corte de pelo personalizado',
      'Limpieza de oídos para prevenir infecciones',
      'Corte de uñas con cuidado',
      'Área de relajación post-grooming'
    ],
    images: [
      'https://storage.googleapis.com/www-factornueve-com/2019/11/35840df0-bigstock-cute-pet-relaxing-in-spa-wel-285839695.jpg',
      'https://th.bing.com/th/id/R.eeda7085260a768efa838ebcd76a10ed?rik=J7BuG0CCN22ihg&pid=ImgRaw&r=0',
      'https://media.istockphoto.com/id/481280807/photo/yorkshire-terrier-dog-day-at-the-spa.jpg?s=612x612&w=0&k=20&c=I4eNCFoH-r4lpog69Ze_XhV5Baon8gwpQm3XuNiAqdQ='
    ]
  },
  {
    id: '2',
    title: 'Consulta Veterinaria',
    description: 'Consulta con nuestros veterinarios expertos para el cuidado general de tu mascota.',
    details: `En nuestra clínica, ofrecemos atención veterinaria integral, desde exámenes de salud regulares 
    hasta vacunaciones y tratamiento de enfermedades. Nuestro equipo está disponible para responder a todas 
    tus preguntas sobre el cuidado de tu mascota y garantizar su bienestar.`,
    features: [
      'Exámenes de salud completos',
      'Vacunaciones actualizadas',
      'Tratamientos médicos personalizados',
      'Asesoramiento sobre nutrición y cuidados'
    ],
    images: [
      'https://i1.wp.com/classeasaude.com.br/wp-content/uploads/2020/02/shutterstock_1479238910.jpg?fit=2121%2C1414&ssl=1',
      'https://th.bing.com/th/id/R.5afffabf55eb210aa11341e46d206881?rik=qtgUfLb9eQO%2fRg&pid=ImgRaw&r=0',
      'https://healthypetsurgentcare.com/images/in-house-diagnostics/veterinarian-taking-diagnostic-of-pet.jpg'
    ]
  },
  {
    id: '3',
    title: 'Entrenamiento para Mascotas',
    description: 'Ofrecemos clases de obediencia y entrenamiento personalizado para tu mascota.',
    details: `Nuestro programa de entrenamiento está diseñado para mejorar el comportamiento de tu mascota 
    y fortalecer el vínculo entre ustedes. Ofrecemos desde clases de obediencia básica hasta entrenamiento avanzado, 
    así como sesiones de modificación de conducta adaptadas a las necesidades específicas de tu amigo peludo.`,
    features: [
      'Clases de obediencia básica y avanzada',
      'Entrenamiento personalizado',
      'Modificación de conducta',
      'Consultas individuales para problemas específicos'
    ],
    images: [
      'https://mascotafiel.com/wp-content/uploads/2016/04/C%C3%B3mo-ense%C3%B1arle-trucos-a-un-perro-2_opt-5.jpg',
      'https://i.pinimg.com/originals/0b/bd/e9/0bbde93c4603f60c49164ef8304c3268.jpg',
      'https://thumbs.dreamstime.com/b/border-collie-jumping-over-hurdles-amazing-day-czech-agility-privat-training-redmerle-border-collie-jumping-over-191709891.jpg'
    ]
  },
  {
    id: '4',
    title: 'Guardería para Mascotas',
    description: 'Un lugar seguro y divertido para que tu mascota pase el día mientras estás ocupado.',
    details: `Nuestra guardería para mascotas ofrece un ambiente seguro y divertido, con espacios de juego 
    supervisados y actividades variadas para mantener a tu mascota feliz. Proporcionamos atención personalizada 
    y alimentación según las necesidades específicas de cada animal.`,
    features: [
      'Espacios de juego amplios y seguros',
      'Actividades de entretenimiento diarias',
      'Alimentación adaptada a cada mascota',
      'Atención y cuidados personalizados'
    ],
    images: [
      'https://th.bing.com/th/id/R.4c8ea71ab0265e6c578650d4d2c11fb6?rik=hz9JzR%2bDqkBKcw&pid=ImgRaw&r=0',
      'https://www.happeningsmagazinepa.com/wp-content/uploads/2018/05/Puppy-Paradise-Divisions.jpg',
      'https://1.bp.blogspot.com/-TnBQRLketaE/X6IvDB87vII/AAAAAAABztI/_msiTjHy0GAyZZeuYJLaIhwVpk-Fdx3uQCLcBGAsYHQ/s2048/e988cbeff6bb084025923de9dda41e7c.jp'
    ]
  },
];

export const ServiciosDetalle = () => {
  const { id } = useParams();
  const servicio = serviciosData.find((s) => s.id === id);

  // Chequeo si el servicio fue encontrado
  if (!servicio) {
    return <p>Servicio no encontrado.</p>;
  }

  return (
    <div className="p-6 bg-gray-100">
      <div className="container p-6 mx-auto bg-white rounded-lg shadow-md animate-fadeIn">
        <h1 className="text-4xl font-bold text-[#6b8e23] text-center mb-4">{servicio.title}</h1>
        <p className="mb-4 text-lg text-gray-700 text-center">{servicio.description}</p>
        
        <img
          src={servicio.images[0]}
          alt={servicio.title}
          className="w-2/3 h-auto mb-4 rounded-lg mx-auto animate-scaleIn"
        />
        
        <p className="mb-4 text-lg text-gray-700">{servicio.details}</p>
        
        <div className="flex justify-center mb-4">
          {servicio.images.slice(1).map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`${servicio.title} - ${idx + 2}`}
              className="w-1/3 h-auto rounded-lg mx-2 animate-scaleIn"
            />
          ))}
        </div>
        
        <h2 className="text-2xl font-semibold text-[#4c6b15] text-center mb-3">Características</h2>
        <ul className="pl-5 list-disc text-gray-600">
          {servicio.features.map((feature, idx) => (
            <li key={idx} className="mb-2">{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};