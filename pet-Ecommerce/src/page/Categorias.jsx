import { Link } from "react-router-dom";

const categorias = [
  {
    id: 1,
    nombre: "Ropa",
    imagen: "https://paraperrosnet.com/wp-content/uploads/2023/11/La-mejor-Ropa-para-perros.jpg",
  },
  {
    id: 2,
    nombre: "Juguetes",
    imagen: "https://image.made-in-china.com/202f0j00NbMGyfpgADkn/Wholesale-Cat-Accessories-Pet-Toy-Pack-Set-Interactive-Cat-Toy.webp",
  },
  {
    id: 3,
    nombre: "Alimento",
    imagen: "https://kupfertax.mx/wp-content/uploads/2021/09/Banner-Productos-Purina_Mesa-de-trabajo-1-copia-002-1024x512.jpg",
  },
  {
    id: 4,
    nombre: "Accesorios",
    imagen: "https://img.freepik.com/foto-gratis/primer-plano-accesorios-mascotas_23-2150960025.jpg",
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
            <Link to={`/categorias/${categoria.id}`} className="text-xl font-semibold text-[#f0ead2]">
              {categoria.nombre}
            </Link>
            <div className="relative flex items-center justify-center w-full h-56 mt-4 overflow-hidden rounded">
              <img
                src={categoria.imagen}
                alt={categoria.nombre}
                className="object-cover max-w-full max-h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
