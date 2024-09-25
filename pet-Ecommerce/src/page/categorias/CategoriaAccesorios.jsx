// Exportamos un array de objetos llamado 'categorias' que contiene la información de varias categorías de productos
export const categorias = [
  {
    // Cada objeto tiene un identificador único 'id', el nombre de la categoría, la URL de una imagen y una breve descripción
    id: 1,
    nombre: "Correas",
    imagen:
      "https://www.kantekpremium.mx/wp-content/uploads/2021/10/tipos_correas_perros.jpg",
    descripcion: "Aca encontraras las correas mas chick para tus lindas mascotas",
  },
  {
    id: 2,
    nombre: "Placas",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSML2z5aAEz9Pgh0ej61F02HC3-yDRoDbzKrw&s",
    descripcion:
      "Tenemos los placas mas resistentes para que tus lindas mascotas esten identificados",
  },
  {
    id: 3,
    nombre: "Pecheras",
    imagen:
      "https://paraperrosnet.com/wp-content/uploads/2023/11/El-mejor-arnes-para-perros.jpg",
    descripcion:
      "Contamos con las mejores pecheras para que tus mascotas esten a la moda",
  },
  {
    id: 4,
    nombre: "Comederos",
    imagen:
      "https://img.freepik.com/foto-gratis/primer-plano-accesorios-mascotas_23-2150960025.jpg",
    descripcion:
      "Ofrecemos los comederos mas lindos para tus mascotas",
  },
];
// Exportamos el componente funcional 'CategoriaAccesorios' que simplemente devuelve un <div> con el texto "CategoriaAccesorios"
export const CategoriaAccesorios = () => {
  return (
    <div>CategoriaAccesorios</div>
  )
}

