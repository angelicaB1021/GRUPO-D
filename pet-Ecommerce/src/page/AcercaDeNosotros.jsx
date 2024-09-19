import React from "react";

const acercaNosotros = [
  {
    id: 1,
    nombre: "Misión",
    imagen:
      "https://www.shutterstock.com/image-photo/portrait-cute-kitten-scottish-straight-260nw-2484218113.jpg",
    descripcion:
      "Somos una empresa enfocada en el cuidado y bienestar de los animales sin distinción de especies, ya sean unos hermosos perritos a unas terribles víboras.",
  },
  {
    id: 2,
    nombre: "vision",
    imagen:
      "https://perrocontento.com/wp-content/uploads/2014/07/Foto_Perros_Gatos.jpg",
    descripcion:
      "Ser reconocidos como líderes en la prestación de servicios, comprometidos con la innovación, la excelencia y la promoción sobre la salud animal en nuestro territorio.",
  },
  {
    id: 3,
    nombre: "Nuestra Historia",
    imagen:
      "https://media.diariolasamericas.com/p/04dc425799df6e271d0cf55b855ef0d6/adjuntos/216/imagenes/001/491/0001491906/855x0/smart/mascotasjpg.png",
    descripcion:
      "Los valores que destacan nuestro ecommerce son el compromiso con la calidad de cada producto, todos lo que hacemos es libre de crueldad animal, enfocado a la tenencia responsable, educando a la gente de como bañar a sus mascotas y a hacerlo con productos especialmente desarrollados para ellos. Buscamos reafirmar el vinculo que existe entre la mascota y su dueño mediante un rico baño y mucho refuerzo positivo. También aportamos con nuestro granito de arena al cuidado de nuestro planeta, por esta misma razón todos los envases de nuestras lineas son PET, los cuales pueden ser reciclados, además de utilizar empaques que están hechos a partir de cartón reciclado y tintas vegetales degradables que no dañan la tierra. Sumado a lo anterior todos nuestros productos son biodegradables por lo tanto no contaminan el agua después de su uso.",
  },
];
export const AcercaDeNosotros = () => {
  return (
    <div className="min-h-screen p-6 bg-[#f0ead2]">
      <h1 className="mb-8 text-4xl font-bold text-center text-[#6c584c]">
        Acerca De Nosotros
      </h1>
      <div className="container grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2">
        {acercaNosotros.map((nosotros) =>(
          <div
          key={nosotros.id}
          className="p-6 text-center bg-[#adc178] rounded-lg shadow-md"
          >
            {nosotros.nombre}
            <div className="relative flex items-center justify-center w-full h-56 mt-4 overflow-hidden rounded">
              <img
              src={nosotros.imagen}
              alt={nosotros.nombre}
              className="object-cover max-w-full max-h-full"
              />
            </div>
            <p className="mt-4 text-sm text-white">{nosotros.descripcion}</p>
            </div>
        ))}
    </div>
    </div>
  );
};
