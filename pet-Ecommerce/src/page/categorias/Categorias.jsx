import { Link } from "react-router-dom";

export const categorias = [
  {
    id: 1,
    nombre: "Ropa",
    imagen:
      "https://paraperrosnet.com/wp-content/uploads/2023/11/La-mejor-Ropa-para-perros.jpg",
    descripcion: "Aca encontraras la ropa mas chick para tus lindas mascotas",
  },
  {
    id: 2,
    nombre: "Juguetes",
    imagen:
      "https://image.made-in-china.com/202f0j00NbMGyfpgADkn/Wholesale-Cat-Accessories-Pet-Toy-Pack-Set-Interactive-Cat-Toy.webp",
    descripcion:
      "Tenemos los juguetes mas resistentes para que tus lindas mascotas disfruten de ellas",
  },
  {
    id: 3,
    nombre: "Alimento",
    imagen:
      "https://kupfertax.mx/wp-content/uploads/2021/09/Banner-Productos-Purina_Mesa-de-trabajo-1-copia-002-1024x512.jpg",
    descripcion:
      "Contamos con los mejores alimentos para que tus mascotas esten sanas y fuertes",
  },
  {
    id: 4,
    nombre: "Accesorios",
    imagen:
      "https://img.freepik.com/foto-gratis/primer-plano-accesorios-mascotas_23-2150960025.jpg",
    descripcion:
      "Ofrecemos los accesorios mas lindos para que tus mascotas esten a la moda",
  },
];

export const Categorias = () => {
  return (
    <div className="min-h-screen p-6 bg-[#dde5b6]">
      <h1 className="mb-8 text-4xl font-bold text-center text-[#6b8e23]">
        Categorias
      </h1>
      <div className="container grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2">
        {categorias.map((categoria) => (
          <div
            key={categoria.id}
            className="p-6 text-center bg-[#a98467] rounded-lg shadow-md"
          >
            <Link
              to={`/categoria/${categoria.id}`}
              className="text-xl font-semibold text-[#f0ead2]"
            >
              {categoria.nombre}
              <div className="relative flex items-center justify-center w-full h-56 mt-4 overflow-hidden rounded">
                <img
                  src={categoria.imagen}
                  alt={categoria.nombre}
                  className="object-cover max-w-full max-h-full"
                />
              </div>
              <p className="mt-4 text-sm text-white">{categoria.descripcion}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
